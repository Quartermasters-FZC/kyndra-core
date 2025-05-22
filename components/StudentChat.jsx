import React, { useState } from "react";
import axios from "axios";

const StudentChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/ask-ai", {
        question: input,
      });

      const aiMessage = {
        role: "ai",
        content: response.data.response || "Sorry, I couldn't find an answer.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Error: Could not reach AI service." },
      ]);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Ask Kyndra AI</h2>
      <div className="bg-white p-4 rounded shadow h-80 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === "ai" ? "text-blue-600" : "text-gray-800"}`}>
            <strong>{msg.role === "ai" ? "Kyndra" : "You"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default StudentChat;
