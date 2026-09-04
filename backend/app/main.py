from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.api.auth import router as auth_router
from app.api.resources import router as resources_router
from app.api.timetable import router as timetable_router

# Ensure upload directory exists
os.makedirs(settings.STORAGE_URL, exist_ok=True)

app.include_router(auth_router, prefix="/api/auth", tags=["auth"])
app.include_router(resources_router, prefix="/api/resources", tags=["resources"])
app.include_router(timetable_router, prefix="/api/timetable", tags=["timetable"])

@app.get("/")
def read_root():
    return {"message": "Welcome to RoenRiviera API"}
