import React, { useEffect, useState } from "react";

function ChatInput({
  onSend,
  suggestion = "",
  onSuggestionHandled,
  disabled = false,
}) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!suggestion) {
      return;
    }

    setMessage(suggestion);
    onSuggestionHandled?.();
  }, [suggestion, onSuggestionHandled]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    onSend?.(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="chat-input-wrapper">
      <form
        onSubmit={handleSubmit}
        className="chat-input-form"
      >
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about this document..."
          rows="1"
          disabled={disabled}
        />

        <button
          type="submit"
          className="chat-send-button"
          disabled={disabled || !message.trim()}
          aria-label="Send message"
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </form>

      <div className="chat-input-hint">
        <span>
          <i className="bi bi-shift me-1"></i>
          Shift + Enter for new line
        </span>

        <span>
          <i className="bi bi-shield-check me-1"></i>
          Answers are based on the selected PDF
        </span>
      </div>
    </div>
  );
}

export default ChatInput;