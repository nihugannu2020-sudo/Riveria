from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.user import User
from app.models.resource import Timetable, Exam
from app.schemas.resource import TimetableCreate, TimetableResponse, ExamCreate, ExamResponse
from app.api.deps import get_current_active_user

router = APIRouter()

@router.get("/", response_model=List[TimetableResponse])
def get_timetables(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return db.query(Timetable).filter(Timetable.user_id == current_user.id).all()

@router.post("/", response_model=TimetableResponse)
def create_timetable(entry: TimetableCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    db_entry = Timetable(**entry.model_dump(), user_id=current_user.id)
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

@router.get("/exams", response_model=List[ExamResponse])
def get_exams(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return db.query(Exam).filter(Exam.user_id == current_user.id).all()

@router.post("/exams", response_model=ExamResponse)
def create_exam(exam: ExamCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    db_exam = Exam(**exam.model_dump(), user_id=current_user.id)
    db.add(db_exam)
    db.commit()
    db.refresh(db_exam)
    return db_exam
