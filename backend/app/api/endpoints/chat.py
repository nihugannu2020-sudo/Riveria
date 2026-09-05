from fastapi import APIRouter, Depends
from app.schemas.chat import ChatRequest, ChatResponse
from app.workflows.router import route_workflow
from app.api.deps import verify_token

router = APIRouter()

@router.post("/river", response_model=ChatResponse)
async def river_endpoint(request: ChatRequest, current_user: dict = Depends(verify_token)):
    request.workflow = "river"
    return await route_workflow(request, current_user)

@router.post("/oasis", response_model=ChatResponse)
async def oasis_endpoint(request: ChatRequest, current_user: dict = Depends(verify_token)):
    request.workflow = "oasis"
    return await route_workflow(request, current_user)
