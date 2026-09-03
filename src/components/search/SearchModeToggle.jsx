// function SearchModeToggle({ mode, onModeChange }) {
//   return (
//     <div className="search-page-mode-toggle">

//       <button
//         type="button"
//         className={`search-page-mode-button ${
//           mode === "keyword" ? "active" : ""
//         }`}
//         onClick={() => onModeChange("keyword")}
//       >
//         <i className="bi bi-search me-2"></i>
//         Keyword Search
//       </button>

//       <button
//         type="button"
//         className={`search-page-mode-button ${
//           mode === "semantic" ? "active" : ""
//         }`}
//         onClick={() => onModeChange("semantic")}
//       >
//         <i className="bi bi-stars me-2"></i>
//         Semantic Search
//       </button>

//     </div>
//   );
// }

// export default SearchModeToggle;

function SearchModeToggle({ mode, onModeChange }) {
  return (
    <div
      className="search-page-mode-toggle"
      role="group"
      aria-label="Search mode"
    >
      <button
        type="button"
        className={`search-page-mode-button ${
          mode === "keyword" ? "active" : ""
        }`}
        onClick={() => onModeChange("keyword")}
        aria-pressed={mode === "keyword"}
      >
        <i className="bi bi-search me-2"></i>
        Keyword Search
      </button>

      <button
        type="button"
        className={`search-page-mode-button ${
          mode === "semantic" ? "active" : ""
        }`}
        onClick={() => onModeChange("semantic")}
        aria-pressed={mode === "semantic"}
      >
        <i className="bi bi-stars me-2"></i>
        Semantic Search
      </button>
    </div>
  );
}

export default SearchModeToggle;