from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Courses
class CourseBase(BaseModel):
    name: str
    description: Optional[str] = None

class CourseCreate(CourseBase):
    pass

class CourseResponse(CourseBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Resources
class ResourceBase(BaseModel):
    title: str
    description: Optional[str] = None
    resource_type: str
    url: Optional[str] = None
    course_id: Optional[int] = None

class ResourceCreate(ResourceBase):
    pass

class ResourceResponse(ResourceBase):
    id: int
    uploader_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    class Config:
        from_attributes = True

# Timetable
class TimetableBase(BaseModel):
    subject: str
    start_time: str
    end_time: str
    day: str

class TimetableCreate(TimetableBase):
    pass

class TimetableResponse(TimetableBase):
    id: int
    user_id: int
    created_at: datetime
    class Config:
        from_attributes = True

# Exam
class ExamBase(BaseModel):
    subject: str
    exam_date: datetime
    topics: Optional[str] = None
    priority: str = "high"

class ExamCreate(ExamBase):
    pass

class ExamResponse(ExamBase):
    id: int
    user_id: int
    created_at: datetime
    class Config:
        from_attributes = True
