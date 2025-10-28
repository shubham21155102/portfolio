import React from "react";
import ChatBot from "../components/ChatBot";

const Home = () => {
  return (
    <main className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
      <p className="mb-6 text-gray-600">Ask the AI for help or explore the site.</p>

      {/* Render the ChatBot component on the home screen */}
      <ChatBot />
    </main>
  );
};

export default Home;
