from fastapi import Depends
from app.db.database import get_db
from sqlalchemy.orm import Session

def get_current_user(db: Session = Depends(get_db)):
    """
    Dummy authentication returning a hardcoded user ID.
    Reverting to pre-Supabase setup as requested.
    """
    return {"sub": "default-dev-user-id"}

verify_token = get_current_user
