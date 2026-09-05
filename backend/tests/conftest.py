import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.config import settings
import jwt
from datetime import datetime, timedelta, timezone

@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c

@pytest.fixture(autouse=True)
def mock_env_vars(monkeypatch):
    monkeypatch.setattr(settings, "SUPABASE_JWT_SECRET", "super-secret-test-key")
    monkeypatch.setattr(settings, "RATE_LIMIT_API", "10/minute")
    monkeypatch.setattr(settings, "API_V1_STR", "/api/v1")

@pytest.fixture
def valid_token():
    payload = {
        "sub": "test_user_123",
        "role": "authenticated",
        "exp": datetime.now(timezone.utc) + timedelta(hours=1)
    }
    return jwt.encode(payload, "super-secret-test-key", algorithm="HS256")

@pytest.fixture
def expired_token():
    payload = {
        "sub": "test_user_123",
        "role": "authenticated",
        "exp": datetime.now(timezone.utc) - timedelta(hours=1)
    }
    return jwt.encode(payload, "super-secret-test-key", algorithm="HS256")
