import React from "react";

function ChatSources({ sources = [] }) {
  if (!sources.length) {
    return null;
  }

  return (
    <div className="chat-sources">
      <div className="chat-sources-title">
        <i className="bi bi-link-45deg"></i>
        Sources
      </div>

      <div className="chat-source-list">
        {sources.map((source) => (
          <div className="chat-source-item" key={source.id}>
            <div className="chat-source-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <div className="chat-source-info">
              <div className="chat-source-name">
                {source.title || "Document source"}
              </div>

              <div className="chat-source-meta">
                {source.page ? `Page ${source.page}` : "Document"}
                {source.relevance && (
                  <span>
                    · {source.relevance}% relevant
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              className="chat-source-button"
              title="View source"
            >
              <i className="bi bi-box-arrow-up-right"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSources;