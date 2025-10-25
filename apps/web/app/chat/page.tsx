import React from "react"
import ChatBot from "../components/ChatBot"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">AI Agent Chat</h1>
        <ChatBot />
      </div>
    </main>
  )
}
