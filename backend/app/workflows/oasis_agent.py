import uuid
import time
import json
import math
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
from app.schemas.chat import ChatRequest, ChatResponse, ChatMetadata, SourceItem
from app.core.config import settings
from duckduckgo_search import DDGS
from app.db.database import SessionLocal
from app.db.models import DocumentChunk
from langchain_google_genai import GoogleGenerativeAIEmbeddings

def get_llm():
    return ChatOpenAI(
        model=settings.OPENROUTER_MODEL,
        openai_api_key=settings.OPENROUTER_API_KEY,
        openai_api_base="https://openrouter.ai/api/v1",
        default_headers={"HTTP-Referer": "http://localhost:5174", "X-Title": "Riviera"}
    )

def perform_web_search(query: str):
    results = []
    try:
        with DDGS() as ddgs:
            for r in ddgs.text(query, max_results=3):
                results.append(r)
    except Exception as e:
        print(f"Web search error: {e}")
    return results

def cosine_similarity(v1, v2):
    dot = sum(a * b for a, b in zip(v1, v2))
    mag1 = math.sqrt(sum(a * a for a in v1))
    mag2 = math.sqrt(sum(b * b for b in v2))
    if mag1 == 0 or mag2 == 0: return 0
    return dot / (mag1 * mag2)

def retrieve_local_documents(query: str, owner_id: str):
    if not settings.GEMINI_API_KEY:
        return []
    
    try:
        embeddings_model = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004", google_api_key=settings.GEMINI_API_KEY)
        query_embedding = embeddings_model.embed_query(query)
    except Exception as e:
        print(f"Embedding error: {e}")
        return []

    db = SessionLocal()
    try:
        chunks = db.query(DocumentChunk).filter(DocumentChunk.owner_id == owner_id).all()
        scored_chunks = []
        for chunk in chunks:
            if not chunk.embedding:
                continue
            try:
                chunk_emb = json.loads(chunk.embedding)
                score = cosine_similarity(query_embedding, chunk_emb)
                scored_chunks.append((score, chunk))
            except Exception:
                pass
        
        # Sort by similarity, descending
        scored_chunks.sort(key=lambda x: x[0], reverse=True)
        # Take top 3 above a reasonable threshold
        return [c for score, c in scored_chunks if score > 0.6][:3]
    finally:
        db.close()

async def execute_oasis_workflow(request: ChatRequest, current_user: dict) -> ChatResponse:
    start_time = time.time()
    conv_id = request.conversation_id or str(uuid.uuid4())
    owner_id = current_user["sub"]
    
    # 1. Retrieve evidence from local database
    top_chunks = retrieve_local_documents(request.message, owner_id)
    
    sources = []
    context = ""
    is_web_search = False
    
    if top_chunks:
        for i, chunk in enumerate(top_chunks):
            snippet = chunk.content
            title = chunk.resource.title if chunk.resource else f"Local Document {chunk.id}"
            context += f"Source {i+1} ({title}): {snippet}\n\n"
            
            sources.append(SourceItem(
                document_id=str(chunk.id),
                document_name=title,
                snippet=snippet,
                source_type="local"
            ))
    else:
        # Fallback to web search if no local chunks found or relevant
        is_web_search = True
        web_results = perform_web_search(request.message)
        for i, res in enumerate(web_results):
            snippet = res.get("body", "")
            title = res.get("title", "")
            url = res.get("href", "")
            context += f"Source {i+1} ({title}): {snippet}\n\n"
            
            sources.append(SourceItem(
                document_id=url,
                document_name=title,
                snippet=snippet,
                source_type="web"
            ))
        
    # 2. LLM Abstraction
    llm = get_llm()
    system_prompt = (
        "You are Oasis, a dedicated RAG (Retrieval-Augmented Generation) assistant. "
        "Answer the user's question STRICTLY based on the provided retrieved context. "
        "Do not hallucinate. If the context does not contain the answer, say 'I don't have enough information'. "
        "Always cite your sources using the provided source names.\n\n"
        f"RETRIEVED CONTEXT:\n{context}"
    )
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=request.message)
    ]
    
    try:
        response = await llm.ainvoke(messages)
        answer = response.content
        from app.rag.grounding import check_evidence_sufficiency
        is_grounded = check_evidence_sufficiency(answer, context) if sources else False
    except Exception as e:
        answer = f"Error communicating with Oasis retrieval core: {str(e)}"
        is_grounded = False
        
    latency = int((time.time() - start_time) * 1000)
    
    return ChatResponse(
        conversation_id=conv_id,
        workflow="oasis",
        answer=answer,
        grounded=is_grounded,
        confidence="high" if context else "low",
        sources=sources,
        metadata=ChatMetadata(retrieval_count=len(sources), latency_ms=latency)
    )
