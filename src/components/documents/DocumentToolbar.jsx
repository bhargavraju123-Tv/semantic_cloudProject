function DocumentToolbar({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}) {
  return (
    <div className="document-toolbar">

      <div className="document-search-box">

        <i className="bi bi-search"></i>

        <input
          type="text"
          placeholder="Search your documents..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />

      </div>

      <div className="document-toolbar-actions">

        <div className="document-sort-wrapper">

          <i className="bi bi-arrow-down-up"></i>

          <select
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value)}
            aria-label="Sort documents"
          >
            <option value="recent">
              Most Recent
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="name">
              Name
            </option>

            <option value="size">
              Size
            </option>
          </select>

        </div>

        <button
          type="button"
          className="btn btn-brand"
        >
          <i className="bi bi-funnel me-2"></i>
          Filter
        </button>

      </div>

    </div>
  );
}

export default DocumentToolbar;