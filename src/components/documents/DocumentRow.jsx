import { Link } from "react-router-dom";

function DocumentRow({ document, onDelete }) {
  return (
    <div className="document-table-row">

      <div className="document-name-cell">
        <div className="document-file-icon">
          <i className="bi bi-file-earmark-pdf-fill"></i>
        </div>

        <div className="document-name-info">
          <Link
            to={`/documents/${document.id}`}
            className="document-name"
          >
            {document.name}
          </Link>

          <span>
            PDF · {document.pages} pages
          </span>
        </div>
      </div>

      <div className="document-table-value">
        {document.size}
      </div>

      <div className="document-table-value">
        {document.uploadDate}
      </div>

      <div>
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

      <div className="document-actions">

        <Link
          to={`/documents/${document.id}`}
          className="document-action"
          title="View document"
        >
          <i className="bi bi-eye"></i>
        </Link>

        <button
          type="button"
          className="document-action"
          title="Generate summary"
        >
          <i className="bi bi-stars"></i>
        </button>

        <Link
          to={`/chat/${document.id}`}
          className="document-action"
          title="Chat with PDF"
        >
          <i className="bi bi-chat-square-text"></i>
        </Link>

        <button
          type="button"
          className="document-action document-action-danger"
          title="Delete document"
          onClick={() => onDelete(document.id)}
        >
          <i className="bi bi-trash3"></i>
        </button>

      </div>

    </div>
  );
}

export default DocumentRow;