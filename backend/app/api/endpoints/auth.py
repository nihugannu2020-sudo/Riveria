from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel

router = APIRouter()

class AuthRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(request: AuthRequest):
    # This would normally call Supabase Python client to sign in and return a JWT
    return {"access_token": "stub_token", "token_type": "bearer"}

@router.post("/register")
async def register(request: AuthRequest):
    # This would normally call Supabase Python client to sign up
    return {"message": "User registered successfully"}
