from fastapi import APIRouter, Depends
from app.schemas.chat import ChatRequest, ChatResponse
from app.workflows.router import route_workflow
from app.api.deps import verify_token

router = APIRouter()

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, current_user: dict = Depends(verify_token)):
    user_id = current_user.get("sub")
    response = await route_workflow(request, user_id)
    return response
