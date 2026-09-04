import httpx
from typing import Optional, Dict, Any, List
from app.core.config import settings
from google import genai
from google.genai import types

class LLMProvider:
    async def generate_response(self, prompt: str, context: str) -> str:
        raise NotImplementedError

class GeminiProvider(LLMProvider):
    def __init__(self):
        # We assume the key will be injected via settings
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)
        self.model_name = settings.GEMINI_MODEL

    async def generate_response(self, prompt: str, context: str) -> str:
        if not settings.GEMINI_API_KEY:
            raise ValueError("Gemini API key not configured.")
        
        full_prompt = f"Context:\n{context}\n\nUser Query:\n{prompt}"
        # Using the async client to avoid blocking the event loop
        response = await self.client.aio.models.generate_content(
            model=self.model_name,
            contents=full_prompt,
            config=types.GenerateContentConfig(
                temperature=0.0
            )
        )
        return response.text

class GroqProvider(LLMProvider):
    def __init__(self):
        self.api_key = settings.GROQ_API_KEY
        self.model_name = settings.GROQ_MODEL
        self.url = "https://api.groq.com/openai/v1/chat/completions"

    async def generate_response(self, prompt: str, context: str) -> str:
        if not self.api_key:
            raise ValueError("Groq API key not configured.")
            
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": self.model_name,
            "messages": [
                {"role": "system", "content": f"You are a helpful assistant answering based on this context: {context}"},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.0
        }
        
        # Add a timeout
        timeout = httpx.Timeout(15.0)
        async with httpx.AsyncClient(timeout=timeout) as client:
            response = await client.post(self.url, headers=headers, json=payload)
            response.raise_for_status()
            data = response.json()
            return data["choices"][0]["message"]["content"]

async def generate_rag_response(prompt: str, context: str) -> Dict[str, Any]:
    """Primary LLM pipeline with fallback support."""
    primary_provider = settings.LLM_PROVIDER.lower()
    
    try:
        if primary_provider == "gemini":
            provider = GeminiProvider()
            answer = await provider.generate_response(prompt, context)
            return {"answer": answer, "provider": "gemini", "fallback_used": False}
        elif primary_provider == "groq":
            provider = GroqProvider()
            answer = await provider.generate_response(prompt, context)
            return {"answer": answer, "provider": "groq", "fallback_used": False}
        else:
            return {"answer": "Invalid LLM provider configured.", "provider": "none", "fallback_used": False}
    except Exception as e:
        if settings.LLM_FALLBACK_ENABLED:
            import logging
            logging.warning(f"Primary LLM ({primary_provider}) failed: {e}. Falling back...")
            try:
                if primary_provider == "gemini":
                    fallback = GroqProvider()
                    answer = await fallback.generate_response(prompt, context)
                    return {"answer": answer, "provider": "groq", "fallback_used": True}
                elif primary_provider == "groq":
                    fallback = GeminiProvider()
                    answer = await fallback.generate_response(prompt, context)
                    return {"answer": answer, "provider": "gemini", "fallback_used": True}
            except Exception as fallback_e:
                logging.error(f"Fallback LLM also failed: {fallback_e}")
                return {"answer": "Service temporarily unavailable due to upstream LLM errors.", "provider": "none", "fallback_used": True}
        
        return {"answer": "Service temporarily unavailable.", "provider": "none", "fallback_used": False}
