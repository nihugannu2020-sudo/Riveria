from typing import List, Dict, Any
from app.schemas.chat import ChatResponse, ChatMetadata

async def check_timetable_conflict(query: str, user_id: str, conv_id: str) -> ChatResponse:
    """
    Deterministic overlap algorithm for checking timetable conflicts.
    Does NOT use vector search.
    """
    # Stub: Normalize -> Sort -> Overlap Algorithm -> Conflict (T/F)
    # In production, this would fetch structured JSON data for the user_id.
    
    # Mocking conflict logic with a more deterministic approach for the user_id
    # We pretend these are the user's existing classes fetched from a database
    existing_schedule = [
        {"course": "CS101", "day": "monday", "start_time": 1000, "end_time": 1130}, # 10:00 AM - 11:30 AM
        {"course": "MA102", "day": "tuesday", "start_time": 1400, "end_time": 1530}, # 2:00 PM - 3:30 PM
    ]
    
    # Simple parse of query to extract new class info (stubbing the NLP part)
    # E.g., "Add PHY101 on Monday from 10:30 AM to 12:00 PM"
    has_conflict = False
    mock_answer = f"No schedule conflicts detected for your query. (User: {user_id})"
    
    if "monday" in query.lower() and ("10:" in query or "11:" in query):
        has_conflict = True
        mock_answer = f"Conflict detected: You already have CS101 scheduled at 10:00 AM to 11:30 AM on Monday. (User: {user_id})"

    return ChatResponse(
        conversation_id=conv_id,
        workflow="timetable",
        answer=mock_answer,
        grounded=True,
        confidence="high",
        sources=[],
        metadata=ChatMetadata(retrieval_count=0, latency_ms=5)
    )
