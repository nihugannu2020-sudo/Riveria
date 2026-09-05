from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Riviera API"
    API_V1_STR: str = "/api/v1"
    
    # Supabase
    SUPABASE_URL: str = ""
    SUPABASE_SERVICE_ROLE_KEY: str = ""
    SUPABASE_JWT_SECRET: str = ""
    DATABASE_URL: str = ""
    
    # LLM Providers
    LLM_PROVIDER: str = "gemini" # gemini or groq
    LLM_FALLBACK_ENABLED: bool = True
    GEMINI_API_KEY: str = ""
    GEMINI_MODEL: str = "gemini-2.5-flash"
    GROQ_API_KEY: str = ""
    GROQ_MODEL: str = "llama3-8b-8192"
    OPENROUTER_API_KEY: str = ""
    OPENROUTER_MODEL: str = "meta-llama/llama-3.1-8b-instruct"

    # Rate Limiting
    REDIS_URL: str = "redis://localhost:6379/0"
    RATE_LIMIT_LOGIN: str = "500/minute"
    RATE_LIMIT_REGISTER: str = "300/minute"
    RATE_LIMIT_PASSWORD_RESET: str = "300/minute"
    RATE_LIMIT_API: str = "600/minute"
    RATE_LIMIT_AI_RIVER: str = "100/minute"
    RATE_LIMIT_AI_OASIS: str = "100/minute"
    RATE_LIMIT_PLANNER: str = "500/minute"
    RATE_LIMIT_UPLOAD: str = "500/minute"
    RATE_LIMIT_YOUTUBE: str = "500/minute"
    RATE_LIMIT_INDEXING: str = "200/minute"

    model_config = SettingsConfigDict(env_file=".env", env_ignore_empty=True, extra="ignore")

settings = Settings()
