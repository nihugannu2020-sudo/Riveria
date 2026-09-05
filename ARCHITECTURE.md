# Riviera: Full Stack Architecture

This document describes the actual architecture for the Riviera learning platform.

## 1. Application Architecture
The application is a decoupled client-server architecture. The frontend is a React Single Page Application (SPA), while the backend is a Python FastAPI service. They communicate via REST APIs with JSON payloads. The system utilizes Supabase for authentication and an abstract SQLAlchemy interface (currently SQLite-backed) for persistence and vector storage.

## 2. Frontend Architecture
- **Framework**: React 19, Vite, React Router DOM v7.
- **Styling**: Tailwind CSS v4. The visual language uses a strict "Scrapbook / Bullet Journal" aesthetic.
- **State**: React Context for global Auth state, local state for component interactions.

## 3. Backend Architecture
- **Framework**: FastAPI (Python 3.x).
- **Servers**: Uvicorn.
- **Background Jobs**: FastAPI `asyncio.to_thread` for async ingestion (PDF parsing, Embeddings) to avoid blocking the main event loop.

## 4. Database Schema (SQLAlchemy)
- **`resources`**: Stores metadata (`id`, `owner_id`, `type`, `title`).
- **`document_chunks`**: Stores `id`, `resource_id`, `owner_id`, `content`, and a JSON-serialized `embedding`.
- **`study_blocks` / `question_banks`**: Defined in models but not yet exposed via API.

## 5. Resource Ingestion Pipeline
Uploaded files and links are sent to `/api/v1/ingest`. The backend validates the payload, assigns a UUID, extracts text, and generates embeddings synchronously via LangChain before returning a success response.

## 6. PDF Processing
We use `pypdf` to extract text from PDFs. The text is passed to LangChain's `RecursiveCharacterTextSplitter` to create chunks of 1000 tokens with 200 token overlaps before embedding via Gemini.

## 7. Vector Storage and Retrieval
- **Storage**: We currently use a JSON string field to store vector embeddings, allowing seamless compatibility with SQLite for local development. 
- **RAG Mechanism**: The backend converts the user's query into an embedding, then performs an in-memory cosine similarity search against the user's `document_chunks`.
- **Constraint**: `owner_id == authenticated_user_id` is strictly enforced in the ORM query.

## 8. River Architecture (General AI)
River is a standard conversational agent.
- It relies on direct LangChain invocation (ChatOpenAI) with a system prompt setting its persona.
- There is no LangGraph pipeline implemented.

## 9. Oasis Architecture (RAG Agent)
Oasis strictly answers questions using retrieved context or web search fallback.
- **Pipeline**: Extract query -> Generate query embedding -> Fetch local chunks -> Compute cosine similarity -> Fallback to DuckDuckGo if no local matches -> Invoke LLM with retrieved context -> Basic lexical check for grounding.
- There is no LangGraph pipeline or dedicated LLM-as-a-judge nodes implemented.

## 10. API Endpoints
- `POST /api/v1/auth/login`
- `POST /api/v1/ingest/pdf`
- `POST /api/v1/ingest/youtube`
- `POST /api/v1/chat/river`
- `POST /api/v1/chat/oasis`

## 11. Known Limitations
- The system currently relies on API rate limits of external LLM providers (Groq/Gemini).
- In-memory cosine similarity does not scale to thousands of documents (a migration to proper `pgvector` on Postgres is needed for production).
- Security relies strictly on prompt engineering and ORM filtering rather than RLS or pre-execution LLM firewalls.
