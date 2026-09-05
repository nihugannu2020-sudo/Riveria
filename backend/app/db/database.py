from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.exc import OperationalError, ArgumentError
from app.core.config import settings

# Attempt to connect to PostgreSQL, fallback to SQLite if it fails
try:
    if not settings.DATABASE_URL:
        raise ArgumentError("DATABASE_URL is empty")
    engine = create_engine(settings.DATABASE_URL)
    engine.connect() # Test the connection
    print("Successfully connected to PostgreSQL")
except (OperationalError, ArgumentError):
    print("PostgreSQL connection failed or empty DATABASE_URL, falling back to SQLite")
    SQLALCHEMY_DATABASE_URL = "sqlite:///./roenriviera.db"
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
