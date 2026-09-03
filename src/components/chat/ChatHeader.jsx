import React from "react";
import { Link } from "react-router-dom";

function ChatHeader({ document }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <Link to="/documents" className="chat-back-button">
          <i className="bi bi-arrow-left"></i>
        </Link>

        <div className="chat-document-icon">
          <i className="bi bi-file-earmark-pdf-fill"></i>
        </div>

        <div className="chat-document-info">
          <h5>{document?.name || "Document"}</h5>

          <div className="chat-document-meta">
            <span>
              <i className="bi bi-file-earmark-text"></i>
              PDF
            </span>

            <span>
              <i className="bi bi-stars"></i>
              AI Chat
            </span>

            <span className="chat-status">
              <span className="chat-status-dot"></span>
              Ready
            </span>
          </div>
        </div>
      </div>

      <div className="chat-header-actions">
        <Link to={`/documents/${document?.id || 1}`} className="btn btn-outline-primary">
          <i className="bi bi-file-text me-2"></i>
          View Document
        </Link>
      </div>
    </div>
  );
}

export default ChatHeader;