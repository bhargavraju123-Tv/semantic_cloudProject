import { Link } from "react-router-dom";

function RecentDocuments() {
  const documents = [
    {
      id: 1,
      name: "Machine Learning Research Paper.pdf",
      size: "2.4 MB",
      date: "02 Sep 2026",
      status: "Processed",
    },
    {
      id: 2,
      name: "Cloud Computing Notes.pdf",
      size: "1.8 MB",
      date: "01 Sep 2026",
      status: "Processed",
    },
    {
      id: 3,
      name: "Spring Boot Architecture.pdf",
      size: "3.1 MB",
      date: "30 Aug 2026",
      status: "Processed",
    },
  ];

  return (
    <div className="dashboard-panel h-100">

      <div className="dashboard-panel-header">
        <div>
          <span className="panel-eyebrow">
            DOCUMENTS
          </span>

          <h5>Recent Documents</h5>
        </div>

        <Link
          to="/documents"
          className="panel-link"
        >
          View all
          <i className="bi bi-arrow-right ms-1"></i>
        </Link>
      </div>

      <div className="recent-documents-list">

        {documents.map((document) => (
          <Link
            key={document.id}
            to={`/documents/${document.id}`}
            className="recent-document-item"
          >
            <div className="recent-document-icon">
              <i className="bi bi-file-earmark-pdf"></i>
            </div>

            <div className="recent-document-info">
              <h6>{document.name}</h6>

              <span>
                {document.size} · {document.date}
              </span>
            </div>

            <span className="document-status">
              {document.status}
            </span>

            <i className="bi bi-chevron-right recent-document-arrow"></i>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default RecentDocuments;