import pytest

def test_auth_missing_token(client):
    # Chat endpoint should require auth (currently it's stubbed, but let's check what it returns)
    # The actual implementation of the chat endpoint uses `verify_token` dependency.
    response = client.post("/api/v1/chat/river", json={"message": "hello"})
    assert response.status_code == 401
    assert "Missing authentication token" in response.json()["detail"] or "Not authenticated" in response.json()["detail"]

def test_auth_invalid_token(client):
    headers = {"Authorization": "Bearer invalid_token"}
    response = client.post("/api/v1/chat/river", json={"message": "hello"}, headers=headers)
    assert response.status_code == 401
    assert "Invalid authentication token" in response.json()["detail"]

def test_auth_expired_token(client, expired_token):
    headers = {"Authorization": f"Bearer {expired_token}"}
    response = client.post("/api/v1/chat/river", json={"message": "hello"}, headers=headers)
    assert response.status_code == 401
    assert "Token has expired" in response.json()["detail"]

def test_auth_valid_token(client, valid_token):
    headers = {"Authorization": f"Bearer {valid_token}"}
    # Wait, the chat endpoint might not be fully implemented or might fail for other reasons (like missing LLM config),
    # but the authentication step should pass (meaning it won't be 401).
    response = client.post("/api/v1/chat/river", json={"message": "hello", "history": []}, headers=headers)
    assert response.status_code != 401
