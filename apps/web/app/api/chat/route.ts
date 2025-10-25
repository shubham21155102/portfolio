import { NextResponse } from "next/server"

type Body = { message?: string }

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body
    const message = (body.message || "").toString().trim()

    if (!message) {
      return NextResponse.json({ error: "message is required" }, { status: 400 })
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY

    if (!OPENAI_API_KEY) {
      // Fallback simple agent if no API key provided
      const lower = message.toLowerCase()
      let reply = "I don't have an OpenAI API key configured."
      if (/(hi|hello|hey)/.test(lower)) reply = "Hello! I can chat here. To enable a smarter agent, set OPENAI_API_KEY in your environment."
      else reply = `You said: "${message}" — to enable a more capable AI, set OPENAI_API_KEY.`

      return NextResponse.json({ reply })
    }

    // Call OpenAI Chat Completions
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 600,
      }),
    })

    if (!openaiRes.ok) {
      const txt = await openaiRes.text()
      return NextResponse.json({ error: `OpenAI error: ${txt}` }, { status: 502 })
    }

    const data = await openaiRes.json()
    const content = data?.choices?.[0]?.message?.content || ""

    return NextResponse.json({ reply: content })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 })
  }
}
