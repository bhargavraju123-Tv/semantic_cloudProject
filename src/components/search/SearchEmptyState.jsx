// function SearchEmptyState({ hasSearched, query }) {
//   if (!hasSearched) {
//     return (
//       <div className="search-empty-state">

//         <div className="search-empty-icon">
//           <i className="bi bi-search"></i>
//         </div>

//         <h5>
//           Search your document library
//         </h5>

//         <p>
//           Enter a keyword or ask a natural-language question
//           to find relevant information across your PDFs.
//         </p>

//       </div>
//     );
//   }

//   return (
//     <div className="search-empty-state">

//       <div className="search-empty-icon">
//         <i className="bi bi-file-earmark-x"></i>
//       </div>

//       <h5>
//         No results found
//       </h5>

//       <p>
//         We couldn't find any documents matching
//         <strong> "{query}"</strong>.
//         Try another query or switch search mode.
//       </p>

//     </div>
//   );
// }

// export default SearchEmptyState;

function SearchEmptyState({ hasSearched, query, mode }) {
  if (!hasSearched) {
    return (
      <div className="search-empty-state">
        <div className="search-empty-icon">
          <i className="bi bi-search"></i>
        </div>

        <h5>
          Search your document library
        </h5>

        <p>
          {mode === "semantic"
            ? "Ask a natural-language question to find information based on meaning across your PDFs."
            : "Enter a keyword or exact phrase to find matching content across your PDFs."}
        </p>

        <div className="search-empty-hint">
          <i className="bi bi-lightbulb"></i>

          <span>
            {mode === "semantic"
              ? 'Example: "documents about machine learning"'
              : 'Example: "spring boot architecture"'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="search-empty-state">
      <div className="search-empty-icon">
        <i className="bi bi-file-earmark-x"></i>
      </div>

      <h5>
        No results found
      </h5>

      <p>
        We couldn't find any documents matching
        <strong> "{query}"</strong>.
        Try another query or switch search mode.
      </p>

      <div className="search-empty-hint">
        <i className="bi bi-arrow-repeat"></i>

        <span>
          Try a broader query or use the other search mode.
        </span>
      </div>
    </div>
  );
}

export default SearchEmptyState;