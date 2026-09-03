// function SearchInput({
//   query,
//   onQueryChange,
//   onSearch,
//   mode,
//   isSearching,
// }) {
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     onSearch();
//   };

//   return (
//     <form
//       className="search-main-form"
//       onSubmit={handleSubmit}
//     >
//       <div className="search-main-input-wrapper">

//         <i className="bi bi-search search-main-icon"></i>

//         <input
//           type="text"
//           value={query}
//           onChange={(event) =>
//             onQueryChange(event.target.value)
//           }
//           placeholder={
//             mode === "semantic"
//               ? "Ask in natural language, e.g. documents about machine learning"
//               : "Search exact words or phrases..."
//           }
//           aria-label="Search documents"
//         />

//         {query && (
//           <button
//             type="button"
//             className="search-clear-button"
//             onClick={() => onQueryChange("")}
//             aria-label="Clear search"
//           >
//             <i className="bi bi-x-circle"></i>
//           </button>
//         )}

//       </div>

//       <button
//         type="submit"
//         className="btn btn-brand search-submit-button"
//         disabled={isSearching}
//       >
//         {isSearching ? (
//           <>
//             <span
//               className="spinner-border spinner-border-sm me-2"
//               role="status"
//               aria-hidden="true"
//             ></span>

//             Searching...
//           </>
//         ) : (
//           <>
//             Search
//             <i className="bi bi-arrow-right ms-2"></i>
//           </>
//         )}
//       </button>

//     </form>
//   );
// }

// export default SearchInput;

function SearchInput({
  query,
  onQueryChange,
  onSearch,
  mode,
  isSearching,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch();
  };

  return (
    <form
      className="search-main-form"
      onSubmit={handleSubmit}
    >
      <div className="search-main-input-wrapper">
        <i className="bi bi-search search-main-icon"></i>

        <input
          type="text"
          value={query}
          onChange={(event) =>
            onQueryChange(event.target.value)
          }
          placeholder={
            mode === "semantic"
              ? "Ask in natural language, e.g. documents about machine learning"
              : "Search exact words or phrases..."
          }
          aria-label="Search documents"
          autoComplete="off"
        />

        {query && !isSearching && (
          <button
            type="button"
            className="search-clear-button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            title="Clear search"
          >
            <i className="bi bi-x-circle"></i>
          </button>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-brand search-submit-button"
        disabled={isSearching || !query.trim()}
      >
        {isSearching ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>

            Searching...
          </>
        ) : (
          <>
            Search
            <i className="bi bi-arrow-right ms-2"></i>
          </>
        )}
      </button>
    </form>
  );
}

export default SearchInput;