"use client"
import React, { useEffect, useRef, useState } from "react"

type Message = { id: string; from: "user" | "bot"; text: string }

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // welcome message
    setMessages([
      { id: "m1", from: "bot", text: "Hi — I\'m your local AI agent. Ask me anything!" },
    ])
  }, [])

  async function send() {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg: Message = { id: String(Date.now()), from: "user", text: trimmed }
    setMessages((m) => [...m, userMsg])
    setText("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || `status ${res.status}`)
      }

      const data = await res.json()
      const botMsg: Message = { id: String(Date.now() + 1), from: "bot", text: data.reply }
      setMessages((m) => [...m, botMsg])
    } catch (err: any) {
      setMessages((m) => [...m, { id: String(Date.now() + 2), from: "bot", text: `Error: ${err?.message || err}` }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send()
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 dark:text-gray-100 shadow">
        <div className="space-y-3 mb-4 h-64 overflow-y-auto" aria-live="polite">
          {messages.map((m) => (
            <div key={m.id} className={m.from === "user" ? "text-right" : "text-left"}>
              <div
                className={`inline-block px-3 py-2 rounded-lg ${
                  m.from === "user" ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
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
        </div>
      </div>
    </div>
  )
}
