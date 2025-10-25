"use client"
import React, { useEffect, useRef, useState } from "react"

type Message = { id: string; from: "user" | "bot"; text: string }

export default function ChatBot() {
  // runtime-configurable API endpoint. If you want the frontend to call a
  // separate ai-agent microservice, set NEXT_PUBLIC_AI_ENDPOINT to its URL
  // (example: "http://localhost:4000/api/ai"). Otherwise the app will call
  // the built-in Next.js route at `/api/chat`.
  const API_ENDPOINT = (process.env.NEXT_PUBLIC_AI_ENDPOINT as string) || "/api/chat"

  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // welcome message
    setMessages([
      { id: "m1", from: "bot", text: "Hi — I\'m your local AI agent. Ask me anything!" },
    ])
  }, [])

  // auto-scroll to bottom whenever messages change
  useEffect(() => {
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages])

  async function send() {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg: Message = { id: String(Date.now()), from: "user", text: trimmed }
    setMessages((m) => [...m, userMsg])
    setText("")
    setLoading(true)

    try {
      const url = API_ENDPOINT
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || `status ${res.status}`)
      }

      const data = await res.json()
      const replyText = data.reply || data.text || JSON.stringify(data)

      // animate typing for the bot reply for a modern feel
      await typeOutBotMessage(replyText)
    } catch (err: any) {
      setMessages((m) => [...m, { id: String(Date.now() + 2), from: "bot", text: `Error: ${err?.message || err}` }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  // Helper: reveal bot text char-by-char to simulate typing
  function typeOutBotMessage(fullText: string) {
    return new Promise<void>((resolve) => {
      const id = String(Date.now() + 3)
      let idx = 0
      const chunkSize = 2 // characters per tick
      const delay = 20 // ms per tick

      // add an initial empty bot message to be updated
      setMessages((m) => [...m, { id, from: "bot", text: "" }])

      const timer = setInterval(() => {
        idx += chunkSize
        const current = fullText.slice(0, idx)
        setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, text: current } : msg)))
        if (idx >= fullText.length) {
          clearInterval(timer)
          resolve()
        }
      }, delay)
    })
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send()
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 dark:text-gray-100 shadow">
        <div className="space-y-3 mb-4 h-64 overflow-y-auto" aria-live="polite" ref={listRef}>
          {messages.map((m) => (
            <div key={m.id} className={`flex items-start gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              {m.from === "bot" && (
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-semibold">AI</div>
              )}
              <div className={m.from === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-[70%] break-words leading-relaxed ${
                    m.from === "user" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
              {m.from === "user" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">YOU</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <input
            ref={inputRef}
            className="flex-1 rounded-md border px-3 py-2 bg-gray-50 dark:bg-gray-800"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKey}
            placeholder={loading ? "Thinking..." : "Type a message and press Enter"}
            disabled={loading}
          />
          <button
            className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50"
            onClick={send}
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
          <button
            className="px-3 py-2 rounded-md border text-sm text-gray-600 dark:text-gray-200 ml-2"
            onClick={() => setMessages([])}
            title="Clear chat"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}
