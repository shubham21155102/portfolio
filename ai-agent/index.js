import http from 'http';
import { URL } from 'url';

const PORT = process.env.PORT || 4000;
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(body);
}

async function handleAiPrompt(prompt) {
  if (!OPENAI_KEY) {
    // Return a deterministic mock response when no key is provided
    return `Mock reply (OPENAI_API_KEY not set). You asked: ${prompt.slice(0, 200)}`;
  }

  // Call OpenAI Chat Completions REST API
  const url = 'https://api.openai.com/v1/chat/completions';
  const body = {
    model: MODEL,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 512
  };

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_KEY}`
    },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`OpenAI API error ${resp.status}: ${txt}`);
  }

  const j = await resp.json();
  // Chat completions usually put text in choices[0].message.content
  const text = j?.choices?.[0]?.message?.content ?? j?.choices?.[0]?.text ?? JSON.stringify(j);
  return text;
}

const server = http.createServer(async (req, res) => {
  try {
    const parsed = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'OPTIONS') {
      // CORS preflight
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      return res.end();
    }

    if (parsed.pathname === '/api/ai' && req.method === 'POST') {
      let raw = '';
      for await (const chunk of req) raw += chunk;
      let body = {};
      try {
        body = raw ? JSON.parse(raw) : {};
      } catch (err) {
        return sendJson(res, 400, { error: 'Invalid JSON' });
      }

      const prompt = body.prompt;
      if (!prompt || typeof prompt !== 'string') {
        return sendJson(res, 400, { error: 'prompt (string) is required in body' });
      }

      try {
        const text = await handleAiPrompt(prompt);
        return sendJson(res, 200, { text });
      } catch (err) {
        console.error('AI error:', err);
        return sendJson(res, 500, { error: 'AI request failed', details: String(err) });
      }
    }

    // Simple root info
    if (parsed.pathname === '/' && req.method === 'GET') {
      return sendJson(res, 200, { ok: true, message: 'ai-agent running', docs: '/api/ai' });
    }

    sendJson(res, 404, { error: 'Not found' });
  } catch (err) {
    console.error('Server error:', err);
    sendJson(res, 500, { error: 'Server error', details: String(err) });
  }
});

server.listen(PORT, () => {
  console.log(`ai-agent listening on http://localhost:${PORT}`);
  if (!OPENAI_KEY) console.log('OPENAI_API_KEY not set — returning mock responses');
});
