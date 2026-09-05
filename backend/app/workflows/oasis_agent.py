import uuid
import time
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
from app.schemas.chat import ChatRequest, ChatResponse, ChatMetadata, SourceItem
from app.core.config import settings
from duckduckgo_search import DDGS

def get_llm():
    return ChatOpenAI(
        model=settings.OPENROUTER_MODEL,
        openai_api_key=settings.OPENROUTER_API_KEY,
        openai_api_base="https://openrouter.ai/api/v1",
        default_headers={"HTTP-Referer": "http://localhost:5174", "X-Title": "My Notebook"}
    )

def perform_web_search(query: str):
    results = []
    try:
        with DDGS() as ddgs:
            # Get top 3 results
            for r in ddgs.text(query, max_results=3):
                results.append(r)
    except Exception as e:
        print(f"Web search error: {e}")
    return results

async def execute_oasis_workflow(request: ChatRequest, current_user: dict) -> ChatResponse:
    start_time = time.time()
    conv_id = request.conversation_id or str(uuid.uuid4())
    
    # 1. Retrieve evidence (Mock local, fallback to web)
    web_results = perform_web_search(request.message)
    sources = []
    context = ""
    
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
        is_grounded = True
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
