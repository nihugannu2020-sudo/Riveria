from fastapi import APIRouter, UploadFile, File, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.api.deps import verify_token
from app.db.models import Resource, DocumentChunk
from app.core.config import settings
import asyncio
import os
import uuid
import json
import io

from pypdf import PdfReader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Initialize embeddings only if key is available
embeddings_model = None
if settings.GEMINI_API_KEY:
    embeddings_model = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004", google_api_key=settings.GEMINI_API_KEY)

def extract_and_embed_pdf(file_content: bytes, resource_id: int, owner_id: str, db: Session):
    reader = PdfReader(io.BytesIO(file_content))
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = splitter.split_text(text)

    if not chunks:
        return

    embeddings = []
    if embeddings_model:
        embeddings = embeddings_model.embed_documents(chunks)

    for i, chunk_text in enumerate(chunks):
        embedding_json = json.dumps(embeddings[i]) if embeddings else None
        doc_chunk = DocumentChunk(
            resource_id=resource_id,
            owner_id=owner_id,
            content=chunk_text,
            embedding=embedding_json
        )
        db.add(doc_chunk)
    db.commit()

@router.post("/pdf")
async def ingest_pdf(file: UploadFile = File(...), current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    # Fix path traversal: use UUID for filename
    file_ext = os.path.splitext(file.filename)[1] if file.filename else ""
    safe_filename = f"{uuid.uuid4()}{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)
    
    content = await file.read()
    with open(file_path, "wb") as f:
        f.write(content)
        
    owner_id = current_user["sub"]
    resource = Resource(
        title=file.filename,
        file_type="PDF",
        file_path=file_path,
        owner_id=owner_id
    )
    db.add(resource)
    db.commit()
    db.refresh(resource)
    
    # Process PDF in background or await (for simplicity, we await here but in threadpool)
    await asyncio.to_thread(extract_and_embed_pdf, content, resource.id, owner_id, db)
    
    return {"message": f"Successfully indexed {file.filename}", "resource_id": resource.id}

@router.post("/timetable")
async def upload_timetable(file: UploadFile = File(...), current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    file_ext = os.path.splitext(file.filename)[1] if file.filename else ""
    safe_filename = f"{uuid.uuid4()}{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)
    
    content = await file.read()
    with open(file_path, "wb") as f:
        f.write(content)
        
    owner_id = current_user["sub"]
    resource = Resource(
        title=file.filename,
        file_type="Timetable",
        file_path=file_path,
        owner_id=owner_id
    )
    db.add(resource)
    db.commit()
    db.refresh(resource)
    
    # Also extract timetable if it's a PDF
    if file.filename.lower().endswith('.pdf'):
        await asyncio.to_thread(extract_and_embed_pdf, content, resource.id, owner_id, db)
    
    return {"message": "Timetable uploaded and indexed successfully", "resource_id": resource.id}

@router.get("/resources")
async def get_resources(current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    resources = db.query(Resource).filter(Resource.owner_id == current_user["sub"]).all()
    return [{"id": r.id, "title": r.title, "type": r.file_type} for r in resources]
