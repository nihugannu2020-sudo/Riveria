from pydantic import BaseModel, Field
from typing import List, Optional, Literal

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=10000, description="The user's query.")
    workflow: Optional[str] = "river"
    conversation_id: Optional[str] = Field(None, max_length=36)
    history: Optional[List[dict]] = []

class SourceItem(BaseModel):
    document_id: str
    document_name: str
    page: Optional[int] = None
    section: Optional[str] = None
    snippet: str
    source_type: Literal["official", "uploaded", "system", "web"]

class ChatMetadata(BaseModel):
    retrieval_count: Optional[int] = None
    latency_ms: Optional[int] = None

class ChatResponse(BaseModel):
    conversation_id: str
    workflow: str
    answer: str
    grounded: bool
    confidence: Literal["high", "medium", "low"]
    sources: List[SourceItem] = []
    metadata: Optional[ChatMetadata] = None
