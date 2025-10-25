# ai-agent

Minimal, dependency-free AI agent service. It accepts POST /api/ai with JSON { "prompt": "..." } and forwards the prompt to the OpenAI Chat Completions REST API. If `OPENAI_API_KEY` is not set, it returns a mock response for quick local testing.

Quick start

1. Copy env file and set your key:

```bash
cp .env.example .env
# edit .env and set OPENAI_API_KEY
```

2. Start the server:

```bash
node index.js
```

3. Example request (curl):

```bash
curl -s -X POST http://localhost:4000/api/ai \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Say hello"}' | jq
```

Notes
- No external dependencies are required — the server uses Node's built-in http and fetch (Node 18+).
- If your environment's Node runtime lacks global fetch, install a fetch polyfill (e.g., `npm i node-fetch`) and update `index.js` accordingly.

Security
- Keep your `OPENAI_API_KEY` secret. Do not commit `.env` to version control.
