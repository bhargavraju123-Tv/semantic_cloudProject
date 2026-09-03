function DocumentMetadata({ document }) {
  return (
    <div className="dashboard-panel h-100">

      <div className="dashboard-panel-header">
        <div>
          <span className="panel-eyebrow">
            DOCUMENT INFORMATION
          </span>

          <h5>
            Metadata
          </h5>
        </div>
      </div>

      <div className="metadata-list">

        <div className="metadata-item">
          <span>
            <i className="bi bi-file-earmark me-2"></i>
            File type
          </span>

          <strong>PDF</strong>
        </div>

        <div className="metadata-item">
          <span>
            <i className="bi bi-hdd me-2"></i>
            File size
          </span>

          <strong>{document.size}</strong>
        </div>

        <div className="metadata-item">
          <span>
            <i className="bi bi-file-text me-2"></i>
            Pages
          </span>

          <strong>{document.pages}</strong>
        </div>

        <div className="metadata-item">
          <span>
            <i className="bi bi-calendar3 me-2"></i>
            Uploaded
          </span>

          <strong>{document.uploadDate}</strong>
        </div>

        <div className="metadata-item">
          <span>
            <i className="bi bi-cpu me-2"></i>
            Processing
          </span>

          <strong>{document.status}</strong>
        </div>

      </div>

    </div>
  );
}

export default DocumentMetadata;