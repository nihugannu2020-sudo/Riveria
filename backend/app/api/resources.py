from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.user import User
from app.models.resource import Resource, Course
from app.schemas.resource import ResourceCreate, ResourceResponse, CourseCreate, CourseResponse
from app.api.deps import get_current_active_user

router = APIRouter()

@router.get("/", response_model=List[ResourceResponse])
def get_resources(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user), skip: int = 0, limit: int = 100):
    resources = db.query(Resource).offset(skip).limit(limit).all()
    return resources

@router.post("/", response_model=ResourceResponse)
def create_resource(resource: ResourceCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    db_resource = Resource(**resource.model_dump(), uploader_id=current_user.id)
    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)
    return db_resource

@router.get("/courses", response_model=List[CourseResponse])
def get_courses(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return db.query(Course).all()

@router.post("/courses", response_model=CourseResponse)
def create_course(course: CourseCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not authorized to create courses")
    db_course = Course(**course.model_dump())
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course
