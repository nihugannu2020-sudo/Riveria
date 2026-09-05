from fastapi import APIRouter
from app.api.endpoints import chat, auth, ingest

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])
api_router.include_router(ingest.router, prefix="/ingest", tags=["ingest"])
