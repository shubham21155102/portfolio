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
    <div className="w-full">
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-sm">
        <div className="space-y-3 mb-4 h-96 overflow-y-auto" aria-live="polite" ref={listRef}>
          {messages.map((m) => (
            <div key={m.id} className={`flex items-start gap-3 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              {m.from === "bot" && (
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-semibold shrink-0">AI</div>
              )}
              <div className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start"} max-w-[75%]`}>
                <div
                  className={`px-4 py-2.5 rounded-2xl break-words leading-relaxed ${
                    m.from === "user" 
                      ? "bg-indigo-600 text-white rounded-tr-sm" 
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
              {m.from === "user" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">YOU</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center pt-2 border-t border-gray-200 dark:border-gray-700">
          <input
            ref={inputRef}
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onKey}
            placeholder={loading ? "AI is thinking..." : "Type your message..."}
            disabled={loading}
          />
          <button
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            onClick={send}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            )}
          </button>
          <button
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
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
