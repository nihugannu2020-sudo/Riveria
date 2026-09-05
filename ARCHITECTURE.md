# My Notebook: Full Stack Architecture

This document describes the final architecture for the "My Notebook" learning platform.

## 1. Application Architecture
The application is a decoupled client-server architecture. The frontend is a React Single Page Application (SPA), while the backend is a Python FastAPI service. They communicate via REST APIs with JSON payloads. The system utilizes Supabase (PostgreSQL) for persistence and vector storage.

## 2. Frontend Architecture
- **Framework**: React 19, Vite, React Router DOM v7.
- **Styling**: Tailwind CSS v4. The visual language uses a strict "Scrapbook / Bullet Journal" aesthetic.
- **State**: React Context for global Auth state, local state for component interactions.

## 3. Backend Architecture
- **Framework**: FastAPI (Python 3.x).
- **Servers**: Uvicorn.
- **Background Jobs**: FastAPI BackgroundTasks for async ingestion (PDF parsing, YouTube transcripts, Embeddings).

## 4. Database Schema (Supabase)
- **`users`**: Managed by Supabase Auth.
- **`resources`**: Stores metadata (`id`, `user_id`, `type`, `status`, `title`).
- **`document_chunks`**: Uses `pgvector` for RAG. Stores `id`, `resource_id`, `user_id`, `content`, `embedding`.
- **`study_blocks`**: `id`, `user_id`, `start_time`, `duration_minutes`, `task`.
- **`question_banks`** / **`questions`**: Structured Q&A data.

## 8. Resource Ingestion Pipeline
Uploaded files and links are sent to `/api/v1/ingest`. The backend validates the payload, assigns a UUID, and pushes the raw extraction/embedding tasks to a background queue to prevent API timeouts.

## 9. PDF Processing
We use `pypdf` to extract text from PDFs. The text is passed to LangChain's `RecursiveCharacterTextSplitter` to create chunks of 1000 tokens with 200 token overlaps before embedding.

## 10. YouTube Lecture Processing
We use `youtube-transcript-api` to fetch captions directly from YouTube servers (bypassing video downloads). The transcript text is cleaned and treated identically to PDF text.

## 11. Question Banks
Question banks are atomic JSON structures stored in the database, allowing users to categorize multiple-choice and open-ended questions. Oasis and River can fetch these for practice scenarios.

## 12. Vector Database
We use Supabase's `pgvector` extension. Embeddings are stored as `vector(1536)` (or matching model dimensions). An HNSW index is applied to the `embedding` column for fast approximate nearest neighbor search.

## 13. RAG Architecture (Retrieval-Augmented Generation)
- **Service**: `retrieveRelevantChunks(userId, query, filters)`
- **Mechanism**: The backend converts the user's query into an embedding, then performs a cosine similarity search against `document_chunks`.
- **Constraint**: `user_id == authenticated_user_id` is strictly enforced at the SQL level.

## 14. River Architecture (General AI)
River is a LangGraph-powered conversational agent.
- **Nodes**: `validate_input → security_check → classify_intent → load_conversation → route_request → generate_response → validate_output → final_response`.
- It routes between tutoring, summarization, and RAG handoffs based on intent classification.

## 15. Oasis Architecture (RAG Agent)
Oasis strictly answers questions using retrieved context.
- **Nodes**: `validate_query → security_check → authorize_user → rewrite_query → retrieve_resources → hybrid_retrieval → rerank_context → validate_context → generate_grounded_answer → verify_citations → output_security → final_response`.

## 16. LangGraph Nodes
LangGraph allows us to define typed state (`TypedDict`) that traverses through pure python functions (nodes). This provides deterministic state management, easy branching, and perfect boundaries between security checks and LLM execution.

## 19. API Endpoints
- `POST /api/v1/auth/login`
- `GET /api/v1/resources`
- `POST /api/v1/ingest/pdf`
- `POST /api/v1/ingest/youtube`
- `POST /api/v1/chat/river`
- `POST /api/v1/chat/oasis`
- `GET /api/v1/planner/blocks`

## 24. Known Limitations
- The system currently relies on API rate limits of external LLM providers (Groq/Gemini).
- Asynchronous jobs are currently run in FastAPI `BackgroundTasks`, which will lose queued tasks if the server restarts unexpectedly (A message broker like Celery is recommended for scale).
