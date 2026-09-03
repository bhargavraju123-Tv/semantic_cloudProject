// import { Link } from "react-router-dom";

// function SearchResultCard({ result, mode }) {
//   return (
//     <article className="search-result-card">

//       <div className="search-result-main">

//         <div className="search-result-file-icon">
//           <i className="bi bi-file-earmark-pdf-fill"></i>
//         </div>

//         <div className="search-result-content">

//           <div className="search-result-top">

//             <Link
//               to={`/documents/${result.id}`}
//               className="search-result-title"
//             >
//               {result.name}
//             </Link>

//             <span className="search-result-page">
//               Page {result.page}
//             </span>

//           </div>

//           <p className="search-result-snippet">
//             {result.snippet}
//           </p>

//           <div className="search-result-meta">

//             <span>
//               <i className="bi bi-file-text me-1"></i>
//               {result.pages} pages
//             </span>

//             <span>
//               <i className="bi bi-calendar3 me-1"></i>
//               {result.date}
//             </span>

//             {mode === "semantic" && (
//               <span className="semantic-relevance">
//                 <i className="bi bi-stars me-1"></i>
//                 {result.relevance}
//               </span>
//             )}

//           </div>

//         </div>

//       </div>

//       <div className="search-result-actions">

//         <Link
//           to={`/documents/${result.id}`}
//           className="btn btn-sm btn-outline-primary"
//         >
//           <i className="bi bi-eye me-1"></i>
//           View
//         </Link>

//         <Link
//           to={`/documents/${result.id}`}
//           className="search-result-icon-button"
//           title="View summary"
//         >
//           <i className="bi bi-stars"></i>
//         </Link>

//         <Link
//           to={`/chat/${result.id}`}
//           className="search-result-icon-button"
//           title="Chat with PDF"
//         >
//           <i className="bi bi-chat-square-text"></i>
//         </Link>

//       </div>

//     </article>
//   );
// }

// export default SearchResultCard;


import { Link } from "react-router-dom";

function SearchResultCard({ result, mode }) {
  return (
    <article className="search-result-card">

      <div className="search-result-main">

        {/* File Icon */}
        <div className="search-result-file-icon">
          <i className="bi bi-file-earmark-pdf-fill"></i>
        </div>

        {/* Result Content */}
        <div className="search-result-content">

          <div className="search-result-top">

            <Link
              to={`/documents/${result.id}`}
              className="search-result-title"
            >
              {result.name}
            </Link>

            <span className="search-result-page">
              Page {result.page}
            </span>

          </div>

          <p className="search-result-snippet">
            {result.snippet}
          </p>

          <div className="search-result-meta">

            <span>
              <i className="bi bi-file-text me-1"></i>
              {result.pages} pages
            </span>

            <span>
              <i className="bi bi-calendar3 me-1"></i>
              {result.date}
            </span>

            {mode === "semantic" && (
              <span className="semantic-relevance">
                <i className="bi bi-stars me-1"></i>
                {result.relevance}
              </span>
            )}

          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="search-result-actions">

        {/* View */}
        <Link
          to={`/documents/${result.id}`}
          className="btn btn-sm btn-outline-primary"
          aria-label={`View ${result.name}`}
        >
          <i className="bi bi-eye me-1"></i>
          View
        </Link>

        {/* Summary */}
        <Link
          to={`/documents/${result.id}`}
          className="search-result-icon-button"
          title="View document and generate summary"
          aria-label={`View summary options for ${result.name}`}
        >
          <i className="bi bi-stars"></i>
        </Link>

        {/* Chat */}
        <Link
          to={`/chat/${result.id}`}
          className="search-result-icon-button"
          title="Chat with PDF"
          aria-label={`Chat with ${result.name}`}
        >
          <i className="bi bi-chat-square-text"></i>
        </Link>

      </div>
    </article>
  );
}

export default SearchResultCard;