# My Notebook

A highly secure, AI-powered learning platform with a Scrapbook aesthetic.

## Features
- AI Study Planner
- Semantic RAG Search across PDFs, Notes, and YouTube lectures.
- General AI Chatbot (River)
- RAG-specific Chatbot (Oasis)

## 21. Local Development Setup

### Prerequisites
- Node.js 20+
- Python 3.10+
- Supabase CLI (or remote Supabase project)
- Redis (optional, for rate limiting)

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## 22. Production Deployment
- **Frontend**: Build using `npm run build` and deploy to Vercel/Netlify.
- **Backend**: Containerize using Docker and deploy to a managed service (AWS ECS, Google Cloud Run) behind a load balancer with HTTPS termination.
- **Database**: Supabase Pro plan (managed Postgres with pgvector).
- **Cache**: Redis instance (ElastiCache/Upstash) for Rate Limiting.

## 23. Testing
Tests are managed via `pytest`.
```bash
cd backend
pytest tests/ -v
```
Tests cover:
- Authentication & Authorization
- RAG Cross-user isolation
- Prompt Injection defenses
- AI Orchestration (LangGraph state transitions)
