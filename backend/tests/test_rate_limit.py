import pytest
import time
from app.core.config import settings

def test_rate_limit_exceeded(client, monkeypatch):
    # Mock settings to have a very low rate limit for testing
    monkeypatch.setattr(settings, "RATE_LIMIT_LOGIN", "2/minute")
    
    # 1st request
    res1 = client.post("/api/v1/auth/login", json={"email": "test@example.com", "password": "password"})
    
    # 2nd request
    res2 = client.post("/api/v1/auth/login", json={"email": "test@example.com", "password": "password"})
    
    # 3rd request should be blocked
    res3 = client.post("/api/v1/auth/login", json={"email": "test@example.com", "password": "password"})
    
    assert res3.status_code == 429
    assert "Too many requests" in res3.json()["detail"]

def test_rate_limit_different_routes(client, monkeypatch):
    monkeypatch.setattr(settings, "RATE_LIMIT_LOGIN", "1/minute")
    monkeypatch.setattr(settings, "RATE_LIMIT_REGISTER", "2/minute")
    
    # Exceed login limit
    client.post("/api/v1/auth/login", json={"email": "test@example.com", "password": "password"})
    res_login_blocked = client.post("/api/v1/auth/login", json={"email": "test@example.com", "password": "password"})
    assert res_login_blocked.status_code == 429
    
    # Register should still work
    res_register1 = client.post("/api/v1/auth/register", json={"email": "test@example.com", "password": "password"})
    assert res_register1.status_code != 429
    
    res_register2 = client.post("/api/v1/auth/register", json={"email": "test@example.com", "password": "password"})
    assert res_register2.status_code != 429
    
    res_register_blocked = client.post("/api/v1/auth/register", json={"email": "test@example.com", "password": "password"})
    assert res_register_blocked.status_code == 429
