from typing import List, Dict, Any, Tuple
from app.schemas.chat import SourceItem

def check_evidence_sufficiency(query: str, retrieved_chunks: List[Dict[str, Any]]) -> bool:
    """
    Checks if the retrieved chunks likely contain enough information to answer the query.
    This prevents the LLM from hallucinating when no relevant data is found.
    """
    if not query or not retrieved_chunks:
        return False
        
    # Basic lexical check: does the answer share substantive vocabulary with the context?
    # retrieved_chunks might be passed as a single context string in our new implementation
    context_text = retrieved_chunks if isinstance(retrieved_chunks, str) else " ".join([str(c) for c in retrieved_chunks])
    
    # Simple overlap check for words > 4 chars
    answer_words = set(w.lower() for w in query.split() if len(w) > 4)
    if not answer_words:
        return True # Trivial answer
        
    context_lower = context_text.lower()
    matches = sum(1 for w in answer_words if w in context_lower)
    
    return matches > 0 # Grounded if at least one substantive word matches

def validate_claim_against_evidence(claim: str, retrieved_chunks: List[Dict[str, Any]]) -> bool:
    """
    Validates that the generated response does not invent facts outside the provided evidence.
    """
    # This is a stub for the validation gate.
    # In production, this might use an LLM-as-a-judge prompt to verify grounding.
    return True

def map_citations(response_text: str, retrieved_chunks: List[Dict[str, Any]]) -> Tuple[bool, List[SourceItem]]:
    """
    Maps claims in the response back to the source chunks.
    If integrity fails, it returns grounded=False.
    """
    sources = []
    
    # Stub mapping logic - simply return all retrieved chunks as sources for now
    for chunk in retrieved_chunks:
        sources.append(SourceItem(
            document_id=chunk.get("document_id", "unknown"),
            document_name=chunk.get("document_name", "Unknown Document"),
            page=chunk.get("page", None),
            section=chunk.get("section", None),
            snippet=chunk.get("content", "")[:100] + "...",
            source_type="official"
        ))
        
    return True, sources
