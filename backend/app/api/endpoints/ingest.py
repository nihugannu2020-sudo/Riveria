from fastapi import APIRouter, UploadFile, File, Depends, Form
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.api.deps import verify_token
from app.db.models import Resource
import time
import os

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/pdf")
async def ingest_pdf(file: UploadFile = File(...), current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    # Read and save the file
    content = await file.read()
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(content)
        
    # Simulate processing
    time.sleep(1)
    
    # Save to database
    resource = Resource(
        title=file.filename,
        file_type="PDF",
        file_path=file_path,
        owner_id=int(current_user["sub"])
    )
    db.add(resource)
    db.commit()
    db.refresh(resource)
    
    return {"message": f"Successfully ingested {file.filename}", "resource_id": resource.id}

@router.post("/timetable")
async def upload_timetable(file: UploadFile = File(...), current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    content = await file.read()
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(content)
        
    resource = Resource(
        title=file.filename,
        file_type="Timetable",
        file_path=file_path,
        owner_id=int(current_user["sub"])
    )
    db.add(resource)
    db.commit()
    db.refresh(resource)
    
    return {"message": "Timetable uploaded successfully", "resource_id": resource.id}

@router.get("/resources")
async def get_resources(current_user: dict = Depends(verify_token), db: Session = Depends(get_db)):
    resources = db.query(Resource).filter(Resource.owner_id == int(current_user["sub"])).all()
    return [{"id": r.id, "title": r.title, "type": r.file_type} for r in resources]
