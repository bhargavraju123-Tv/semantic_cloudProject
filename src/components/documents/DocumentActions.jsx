import { Link } from "react-router-dom";

function DocumentActions({ document }) {
  const isProcessed = document.status === "Processed";
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

  const handleDownload = () => {
    if (!document.fileUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = document.fileUrl;
    link.download = document.name;
    link.target = "_blank";
    link.rel = "noopener,noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-panel">
      <div className="dashboard-panel-header">
        <div>
          <span className="panel-eyebrow">
            DOCUMENT ACTIONS
          </span>

          <h5>
            Explore this document
          </h5>
        </div>
      </div>

      <div className="document-action-list">

        {/* Open PDF */}
        <button
          type="button"
          className={`document-detail-action ${
            !hasFileUrl ? "disabled" : ""
          }`}
          onClick={handleOpenPdf}
          disabled={!hasFileUrl}
        >
          <span className="document-detail-action-icon blue">
            <i className="bi bi-file-earmark-pdf"></i>
          </span>

          <span>
            <strong>
              Open PDF
            </strong>

            <small>
              {hasFileUrl
                ? "View the original document"
                : "Available after backend file storage"}
            </small>
          </span>

          <i className="bi bi-box-arrow-up-right"></i>
        </button>

        {/* Chat with PDF */}
        <Link
          to={`/chat/${document.id}`}
          className={`document-detail-action ${
            !isProcessed ? "disabled" : ""
          }`}
          onClick={(event) => {
            if (!isProcessed) {
              event.preventDefault();
            }
          }}
        >
          <span className="document-detail-action-icon orange">
            <i className="bi bi-chat-square-text"></i>
          </span>

          <span>
            <strong>
              Chat with PDF
            </strong>

            <small>
              {isProcessed
                ? "Ask questions about this document"
                : "Available after processing"}
            </small>
          </span>

          <i className="bi bi-chevron-right"></i>
        </Link>

        {/* Download PDF */}
        <button
          type="button"
          className={`document-detail-action ${
            !hasFileUrl ? "disabled" : ""
          }`}
          onClick={handleDownload}
          disabled={!hasFileUrl}
        >
          <span className="document-detail-action-icon blue">
            <i className="bi bi-download"></i>
          </span>

          <span>
            <strong>
              Download PDF
            </strong>

            <small>
              {hasFileUrl
                ? "Save a copy to your device"
                : "Available after backend file storage"}
            </small>
          </span>

          <i className="bi bi-chevron-right"></i>
        </button>

      </div>
    </div>
  );
}

export default DocumentActions;