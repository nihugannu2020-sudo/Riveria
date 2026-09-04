from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=True)
    resource_type = Column(String, nullable=False) # e.g. "PDF", "Notes", "Link"
    url = Column(String, nullable=True) # local path or external link
    
    uploader_id = Column(Integer, ForeignKey("users.id"))
    course_id = Column(Integer, ForeignKey("courses.id"), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    uploader = relationship("User")
    course = relationship("Course")

class Timetable(Base):
    __tablename__ = "timetables"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    subject = Column(String, nullable=False)
    start_time = Column(String, nullable=False) # e.g. 09:00
    end_time = Column(String, nullable=False) # e.g. 10:00
    day = Column(String, nullable=False) # e.g. Monday
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User")

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    subject = Column(String, nullable=False)
    exam_date = Column(DateTime(timezone=True), nullable=False)
    topics = Column(Text, nullable=True)
    priority = Column(String, default="high")

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User")
