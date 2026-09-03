function DocumentPreview({ document }) {
  const hasFileUrl = Boolean(document.fileUrl);

  const handleOpenPdf = () => {
    if (!document.fileUrl) {
      return;
    }

    window.open(
      document.fileUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="dashboard-panel document-preview-panel">

      <div className="dashboard-panel-header">

        <div>
          <span className="panel-eyebrow">
            DOCUMENT PREVIEW
          </span>

          <h5>
            {document.name}
          </h5>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={handleOpenPdf}
          disabled={!hasFileUrl}
        >
          <i className="bi bi-box-arrow-up-right me-2"></i>

          {hasFileUrl
            ? "Open PDF"
            : "PDF Unavailable"}
        </button>

      </div>

      <div className="document-preview">

        <div className="document-preview-page">

          <div className="preview-page-header">
            <div className="preview-logo-line"></div>
            <div className="preview-title-line"></div>
          </div>

          <div className="preview-content">

            <span className="preview-line large"></span>
            <span className="preview-line"></span>
            <span className="preview-line"></span>
            <span className="preview-line medium"></span>

            <div className="preview-block mt-4">
              <span className="preview-line"></span>
              <span className="preview-line"></span>
              <span className="preview-line medium"></span>
            </div>

            <div className="preview-block mt-4">
              <span className="preview-line large"></span>
              <span className="preview-line"></span>
              <span className="preview-line"></span>
              <span className="preview-line short"></span>
            </div>

          </div>

          <div className="preview-page-number">
            Page 1
          </div>

        </div>

      </div>
    </div>
  );
}

export default DocumentPreview;