// import React from "react";
// import ChatMessage from "./ChatMessage";

// function ChatMessages({ messages = [], isTyping = false }) {
//   return (
//     <div className="chat-messages">
//       {messages.length === 0 ? (
//         <div className="chat-empty-state">
//           <div className="chat-empty-icon">
//             <i className="bi bi-stars"></i>
//           </div>

//           <h4>Chat with your document</h4>

//           <p>
//             Ask questions about this PDF and get answers based on its
//             content using AI-powered retrieval.
//           </p>

//           <div className="chat-suggestions">
//             <span>Try asking:</span>

//             <button type="button">
//               What is this document about?
//             </button>

//             <button type="button">
//               Summarize the main points
//             </button>

//             <button type="button">
//               What are the key findings?
//             </button>
//           </div>
//         </div>
//       ) : (
//         <>
//           {messages.map((message) => (
//             <ChatMessage
//               key={message.id}
//               message={message}
//             />
//           ))}

//           {isTyping && (
//             <div className="chat-message-row assistant-message">
//               <div className="chat-avatar">
//                 <i className="bi bi-stars"></i>
//               </div>

//               <div className="chat-message-content">
//                 <div className="chat-message-name">
//                   Semantic AI
//                 </div>

//                 <div className="chat-message-bubble chat-typing-bubble">
//                   <span className="typing-dot"></span>
//                   <span className="typing-dot"></span>
//                   <span className="typing-dot"></span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default ChatMessages;

import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({
  messages = [],
  isTyping = false,
  onSuggestionClick,
}) {
  const suggestions = [
    "What is this document about?",
    "Summarize the main points",
    "What are the key findings?",
  ];

  return (
    <div className="chat-messages">
      {messages.length === 0 ? (
        <div className="chat-empty-state">
          <div className="chat-empty-icon">
            <i className="bi bi-stars"></i>
          </div>

          <h4>Chat with your document</h4>

          <p>
            Ask questions about this PDF and get answers based on its
            content using AI-powered retrieval.
          </p>

          <div className="chat-suggestions">
            <span>Try asking:</span>

            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onSuggestionClick?.(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}

          {isTyping && (
            <div className="chat-message-row assistant-message">
              <div className="chat-avatar">
                <i className="bi bi-stars"></i>
              </div>

              <div className="chat-message-content">
                <div className="chat-message-name">
                  Semantic AI
                </div>

                <div className="chat-message-bubble chat-typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChatMessages;