import uuid
import time
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from app.schemas.chat import ChatRequest, ChatResponse, ChatMetadata
from app.core.config import settings

def get_llm():
    return ChatOpenAI(
        model=settings.OPENROUTER_MODEL,
        openai_api_key=settings.OPENROUTER_API_KEY,
        openai_api_base="https://openrouter.ai/api/v1",
        default_headers={"HTTP-Referer": "http://localhost:5174", "X-Title": "My Notebook"}
    )

async def execute_river_workflow(request: ChatRequest, current_user: dict) -> ChatResponse:
    start_time = time.time()
    conv_id = request.conversation_id or str(uuid.uuid4())
    
    llm = get_llm()
    
    messages = [
        SystemMessage(content="You are River, an advanced and highly intelligent general-purpose AI assistant for a student's Scrapbook/Notebook platform. You are helpful, extremely concise, and smart. DO NOT hallucinate.")
    ]
    
    # Add history
    if request.history:
        for msg in request.history:
            if msg.get("role") == "user":
                messages.append(HumanMessage(content=msg.get("content", "")))
            elif msg.get("role") == "assistant":
                messages.append(AIMessage(content=msg.get("content", "")))
                
    messages.append(HumanMessage(content=request.message))
    
    try:
        response = await llm.ainvoke(messages)
        answer = response.content
    except Exception as e:
        answer = f"Error communicating with River cognitive core: {str(e)}"
        
    latency = int((time.time() - start_time) * 1000)
    
    return ChatResponse(
        conversation_id=conv_id,
        workflow="river",
        answer=answer,
        grounded=False,
        confidence="high",
        sources=[],
        metadata=ChatMetadata(retrieval_count=0, latency_ms=latency)
    )
