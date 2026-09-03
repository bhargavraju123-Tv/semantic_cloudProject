import { Link } from "react-router-dom";

function DocumentHeader({ document }) {
  return (
    <div className="document-details-header">

      <div className="document-details-heading">

        <Link
          to="/documents"
          className="back-to-documents"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Documents
        </Link>

        <div className="document-heading-main mt-3">

          <div className="document-heading-icon">
            <i className="bi bi-file-earmark-pdf-fill"></i>
          </div>

          <div>
            <span className="topbar-eyebrow">
              PDF DOCUMENT
            </span>

            <h2>{document.name}</h2>

            <p>
              {document.size} · {document.pages} pages · Uploaded{" "}
              {document.uploadDate}
            </p>
          </div>

        </div>

      </div>

      <span
        className={`document-status-badge ${
          document.status === "Processed"
            ? "status-success"
            : document.status === "Processing"
              ? "status-processing"
              : "status-error"
        }`}
      >
        <span className="status-dot"></span>
        {document.status}
      </span>

    </div>
  );
}

export default DocumentHeader;