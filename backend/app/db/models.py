from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class User(Base):
    __tablename__ = "users"

    # UUID from Supabase will be stored here as string
    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    resources = relationship("Resource", back_populates="owner")
    blocks = relationship("PlannerBlock", back_populates="owner")
    channels = relationship("ForumChannel", back_populates="owner")
    chunks = relationship("DocumentChunk", back_populates="owner")


class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    file_type = Column(String) # e.g., 'PDF', 'Timetable'
    file_path = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    owner_id = Column(String, ForeignKey("users.id"))

    owner = relationship("User", back_populates="resources")
    chunks = relationship("DocumentChunk", back_populates="resource")


class DocumentChunk(Base):
    __tablename__ = "document_chunks"
    
    id = Column(Integer, primary_key=True, index=True)
    resource_id = Column(Integer, ForeignKey("resources.id"))
    owner_id = Column(String, ForeignKey("users.id"))
    content = Column(Text)
    embedding = Column(Text) # JSON string array of floats
    
    owner = relationship("User", back_populates="chunks")
    resource = relationship("Resource", back_populates="chunks")


class PlannerBlock(Base):
    __tablename__ = "planner_blocks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    time_range = Column(String)
    day = Column(Integer, default=0) # 0 for Mon, etc.
    owner_id = Column(String, ForeignKey("users.id"))

    owner = relationship("User", back_populates="blocks")


class ForumChannel(Base):
    __tablename__ = "forum_channels"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    owner_id = Column(String, ForeignKey("users.id"))

    owner = relationship("User", back_populates="channels")
