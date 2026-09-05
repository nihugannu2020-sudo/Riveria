from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.exc import OperationalError
from app.core.config import settings

# Attempt to connect to PostgreSQL, fallback to SQLite if it fails
try:
    engine = create_engine(settings.DATABASE_URL)
    engine.connect() # Test the connection
    print("Successfully connected to PostgreSQL")
except OperationalError:
    print("PostgreSQL connection failed, falling back to SQLite")
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
