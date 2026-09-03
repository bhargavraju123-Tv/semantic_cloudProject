import { useParams } from "react-router-dom";

import Sidebar from "../../components/dashboard/Sidebar";
import DashboardTopbar from "../../components/dashboard/DashboardTopbar";

import DocumentHeader from "../../components/documents/DocumentHeader";
import DocumentPreview from "../../components/documents/DocumentPreview";
import DocumentMetadata from "../../components/documents/DocumentMetadata";
import DocumentSummary from "../../components/documents/DocumentSummary";
import DocumentActions from "../../components/documents/DocumentActions";

import { getDocumentById } from "../../mock/documentData";

function DocumentDetails() {
  const { id } = useParams();

  const document = getDocumentById(id);

  if (!document) {
    return (
      <div className="dashboard-layout">
        <Sidebar />

        <div className="dashboard-content">
          <DashboardTopbar />

          <main className="dashboard-main">

            <div className="documents-empty-state">
              <div className="documents-empty-icon">
                <i className="bi bi-file-earmark-x"></i>
              </div>

              <h5>
                Document not found
              </h5>

              <p>
                The document you're looking for
                does not exist.
              </p>
            </div>

          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardTopbar />

        <main className="dashboard-main document-details-main">

          <DocumentHeader
            document={document}
          />

          <section className="document-details-section">
            <div className="row g-4">

              <div className="col-xl-8">
                <DocumentPreview
                  document={document}
                />
              </div>

              <div className="col-xl-4">
                <DocumentMetadata
                  document={document}
                />
              </div>

            </div>
          </section>

          <section className="document-details-section">
            <div className="row g-4">

              <div className="col-xl-8">
                <DocumentSummary
                  document={document}
                />
              </div>

              <div className="col-xl-4">
                <DocumentActions
                  document={document}
                />
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default DocumentDetails;