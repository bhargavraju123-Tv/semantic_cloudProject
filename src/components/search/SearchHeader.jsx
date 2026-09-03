function SearchHeader({ mode }) {
  return (
    <div className="search-page-header">

      <span className="topbar-eyebrow">
        DOCUMENT SEARCH
      </span>

      <h2>
        Find the information
        <span className="text-brand"> you need</span>
      </h2>

      <p>
        Search across your uploaded PDF documents using exact
        keywords or contextual meaning.
        {mode === "semantic" &&
          " Semantic search helps discover relevant content even when the exact words differ."}
      </p>

    </div>
  );
}

export default SearchHeader;