import time
import logging
from fastapi import Request
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from collections import defaultdict
import redis
from app.core.config import settings

logger = logging.getLogger(__name__)

# In-memory store for fallback (use Redis in production)
RATE_LIMIT_STORE = defaultdict(list)

# Setup Redis client
try:
    redis_client = redis.from_url(settings.REDIS_URL, decode_responses=True)
    redis_client.ping()
    USE_REDIS = True
except Exception as e:
    logger.warning(f"Failed to connect to Redis for rate limiting: {e}. Falling back to in-memory store.")
    USE_REDIS = False
    redis_client = None

def parse_rate_limit(limit_str: str) -> int:
    """Parses '5/minute' to 5 (integer)"""
    try:
        return int(limit_str.split('/')[0])
    except Exception:
        return 60 # Default

class RateLimitMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.method == "OPTIONS":
            return await call_next(request)
            
        # 1. Determine key (IP or User ID)
        # For simplicity in middleware, we might only have IP unless we parse the JWT here.
        # Since auth is handled in a Depends() later in the lifecycle, middleware usually relies on IP.
        # Alternatively, we could extract the token if present.
        client_ip = request.client.host if request.client else "127.0.0.1"
        
        auth_header = request.headers.get("Authorization")
        user_id = None
        if auth_header and auth_header.startswith("Bearer "):
            # We won't fully validate the token here (that's deps.py's job),
            # but we can extract the user ID for rate limiting purposes if needed.
            # However, since deps.py does validation, doing it safely here is tricky without duplicating logic.
            # We'll use IP + route path as the key for now.
            pass
        
        # 2. Determine limits based on route
        path = request.url.path
        limit = parse_rate_limit(settings.RATE_LIMIT_API)
        
        if path.startswith(f"{settings.API_V1_STR}/auth/login"):
            limit = parse_rate_limit(settings.RATE_LIMIT_LOGIN)
        elif path.startswith(f"{settings.API_V1_STR}/auth/register"):
            limit = parse_rate_limit(settings.RATE_LIMIT_REGISTER)
        elif path.startswith(f"{settings.API_V1_STR}/chat/river"):
            limit = parse_rate_limit(settings.RATE_LIMIT_AI_RIVER)
        elif path.startswith(f"{settings.API_V1_STR}/chat/oasis"):
            limit = parse_rate_limit(settings.RATE_LIMIT_AI_OASIS)
        elif path.startswith(f"{settings.API_V1_STR}/planner"):
            limit = parse_rate_limit(settings.RATE_LIMIT_PLANNER)
        elif path.startswith(f"{settings.API_V1_STR}/ingest"):
            limit = parse_rate_limit(settings.RATE_LIMIT_UPLOAD)
            
        # Unique key for rate limiting
        key = f"rate_limit:{client_ip}:{path}"
        current_time = int(time.time())
        window_size = 60 # 1 minute
        
        if USE_REDIS:
            try:
                pipeline = redis_client.pipeline()
                # Remove items older than the window
                pipeline.zremrangebyscore(key, 0, current_time - window_size)
                # Count items in the window
                pipeline.zcard(key)
                # Add current request
                pipeline.zadd(key, {str(current_time): current_time})
                # Set expiry on the key
                pipeline.expire(key, window_size)
                
                results = pipeline.execute()
                request_count = results[1]
                
                if request_count >= limit:
                    return JSONResponse(
                        status_code=429,
                        content={"detail": "Too many requests. Please try again later."},
                        headers={"Retry-After": str(window_size)}
                    )
            except Exception as e:
                logger.error(f"Redis rate limit error: {e}")
                # Fallthrough to allow request if Redis fails mid-flight
        else:
            # In-memory fallback
            RATE_LIMIT_STORE[key] = [
                t for t in RATE_LIMIT_STORE[key] 
                if current_time - t < window_size
            ]
            
            if len(RATE_LIMIT_STORE[key]) >= limit:
                return JSONResponse(
                    status_code=429,
                    content={"detail": "Too many requests. Please try again later."},
                    headers={"Retry-After": str(window_size)}
                )
                
            RATE_LIMIT_STORE[key].append(current_time)
            
        response = await call_next(request)
        return response
