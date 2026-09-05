from app.schemas.chat import ChatRequest, ChatResponse, ChatMetadata
from app.workflows.river_agent import execute_river_workflow
from app.workflows.oasis_agent import execute_oasis_workflow
import uuid

async def route_workflow(request: ChatRequest, current_user: dict = None) -> ChatResponse:
    # Generate a conversation ID if not provided
    if request.workflow == "river":
        return await execute_river_workflow(request, current_user)
    elif request.workflow == "oasis":
        return await execute_oasis_workflow(request, current_user)
    else:
        # Fallback for unknown workflow
        conv_id = request.conversation_id or str(uuid.uuid4())
        return ChatResponse(
            conversation_id=conv_id,
            workflow=request.workflow or "unknown",
            answer="Unsupported workflow. Use 'river' or 'oasis'.",
            grounded=False,
            confidence="low",
            sources=[],
            metadata=ChatMetadata(retrieval_count=0, latency_ms=0)
        )
