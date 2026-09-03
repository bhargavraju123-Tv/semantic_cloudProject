import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ChatHeader from "../../components/chat/ChatHeader";
import ChatMessages from "../../components/chat/ChatMessages";
import ChatInput from "../../components/chat/ChatInput";
import ChatSources from "../../components/chat/ChatSources";

function Chat() {
  const { documentId } = useParams();

  const [document, setDocument] = useState(null);
  const [messages, setMessages] = useState([]);
  const [sources, setSources] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const mockDocument = {
      id: documentId || 1,
      name: "Smart Document Organizer Research Paper.pdf",
      type: "PDF",
      status: "Processed",
    };

    setDocument(mockDocument);
  }, [documentId]);

  const handleSuggestionClick = (question) => {
    setSuggestion(question);
  };

  const handleSendMessage = (messageText) => {
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: messageText,
      timestamp: "Just now",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setSuggestion("");
    setSources([]);
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Based on the selected document, semantic search helps identify relevant content by understanding the meaning of the query instead of relying only on exact keyword matches.",
        timestamp: "Just now",
      };

      const mockSources = [
        {
          id: 1,
          title: "Smart Document Organizer Research Paper.pdf",
          page: 5,
          relevance: 94,
        },
        {
          id: 2,
          title: "Smart Document Organizer Research Paper.pdf",
          page: 8,
          relevance: 89,
        },
      ];

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);

      setSources(mockSources);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="chat-page">
      <div className="chat-page-container">
        <ChatHeader document={document} />

        <div className="chat-layout">
          <main className="chat-main">
            <ChatMessages
              messages={messages}
              isTyping={isTyping}
              onSuggestionClick={handleSuggestionClick}
            />

            <ChatInput
              onSend={handleSendMessage}
              suggestion={suggestion}
              onSuggestionHandled={() => setSuggestion("")}
              disabled={isTyping}
            />
          </main>

          <aside className="chat-sidebar">
            <div className="chat-sidebar-card">
              <div className="chat-sidebar-heading">
                <i className="bi bi-file-earmark-pdf-fill"></i>

                <div>
                  <h6>Current Document</h6>
                  <span>AI context source</span>
                </div>
              </div>

              <div className="chat-sidebar-document">
                <div className="chat-sidebar-file-icon">
                  <i className="bi bi-file-earmark-pdf"></i>
                </div>

                <div className="chat-sidebar-file-info">
                  <strong>
                    {document?.name || "Document"}
                  </strong>

                  <span>
                    <i className="bi bi-check-circle-fill"></i>
                    Processed and ready
                  </span>
                </div>
              </div>

              <div className="chat-sidebar-divider"></div>

              <div className="chat-sidebar-info">
                <div>
                  <span>Mode</span>
                  <strong>RAG</strong>
                </div>

                <div>
                  <span>Source</span>
                  <strong>PDF</strong>
                </div>

                <div>
                  <span>Search</span>
                  <strong>Semantic</strong>
                </div>
              </div>
            </div>

            <ChatSources sources={sources} />

            <div className="chat-help-card">
              <div className="chat-help-icon">
                <i className="bi bi-lightbulb-fill"></i>
              </div>

              <div>
                <h6>Ask better questions</h6>

                <p>
                  Ask specific questions about the document for
                  more relevant answers.
                </p>
              </div>
            </div>

            <Link
              to="/documents"
              className="chat-back-documents"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Documents
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Chat;