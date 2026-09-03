import React from "react";

function ChatMessage({ message }) {
  const isUser = message?.role === "user";

  return (
    <div className={`chat-message-row ${isUser ? "user-message" : "assistant-message"}`}>
      <div className="chat-avatar">
        {isUser ? (
          <i className="bi bi-person-fill"></i>
        ) : (
          <i className="bi bi-stars"></i>
        )}
      </div>

      <div className="chat-message-content">
        <div className="chat-message-name">
          {isUser ? "You" : "Semantic AI"}
        </div>

        <div className="chat-message-bubble">
          <p>{message?.content || ""}</p>
        </div>

        {message?.timestamp && (
          <div className="chat-message-time">
            {message.timestamp}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;