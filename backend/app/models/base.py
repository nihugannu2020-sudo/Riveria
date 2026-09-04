# Import all models here so that Alembic's env.py can discover them
from app.core.database import Base
from app.models.user import User

from app.models.resource import Course, Resource, Timetable, Exam
# etc.
