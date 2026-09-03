// import { useMemo, useState } from "react";

// import Sidebar from "../../components/dashboard/Sidebar";
// import DashboardTopbar from "../../components/dashboard/DashboardTopbar";
// import DocumentToolbar from "../../components/documents/DocumentToolbar";
// import UploadDropzone from "../../components/documents/UploadDropzone";
// import DocumentTable from "../../components/documents/DocumentTable";

// import {
//   mockDocuments,
//   addMockDocument,
//   removeMockDocument,
// } from "../../mock/documentData";

// function Documents() {
//   const [showUpload, setShowUpload] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("recent");

//   const [documents, setDocuments] = useState([
//     ...mockDocuments,
//   ]);

//   const filteredDocuments = useMemo(() => {
//     const normalizedSearch = searchTerm
//       .toLowerCase()
//       .trim();

//     const filtered = documents.filter((document) =>
//       document.name
//         .toLowerCase()
//         .includes(normalizedSearch)
//     );

//     return [...filtered].sort((a, b) => {
//       if (sortOption === "name") {
//         return a.name.localeCompare(b.name);
//       }

//       if (sortOption === "size") {
//         return (
//           parseFloat(a.size) -
//           parseFloat(b.size)
//         );
//       }

//       if (sortOption === "oldest") {
//         return a.id - b.id;
//       }

//       return b.id - a.id;
//     });
//   }, [documents, searchTerm, sortOption]);

//   const handleUpload = (file) => {
//     const newDocument = {
//       id: Date.now(),
//       name: file.name,
//       size: `${(
//         file.size /
//         (1024 * 1024)
//       ).toFixed(2)} MB`,
//       uploadDate: "Just now",
//       status: "Processing",
//       pages: "--",
//     };

//     addMockDocument(newDocument);

//     setDocuments((previous) => [
//       newDocument,
//       ...previous,
//     ]);

//     setShowUpload(false);
//   };

//   const handleDelete = (documentId) => {
//     const shouldDelete = window.confirm(
//       "Are you sure you want to delete this document?"
//     );

//     if (!shouldDelete) {
//       return;
//     }

//     removeMockDocument(documentId);

//     setDocuments((previous) =>
//       previous.filter(
//         (document) =>
//           document.id !== documentId
//       )
//     );
//   };

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-content">
//         <DashboardTopbar />

//         <main className="dashboard-main documents-main">

//           {/* Page Header */}
//           <section className="documents-page-header">
//             <div>
//               <span className="topbar-eyebrow">
//                 DOCUMENT LIBRARY
//               </span>

//               <h2>
//                 Your Documents
//               </h2>

//               <p>
//                 Manage your PDF documents and prepare
//                 them for intelligent search, summaries,
//                 and conversations.
//               </p>
//             </div>

//             <button
//               type="button"
//               className="btn btn-brand"
//               onClick={() =>
//                 setShowUpload(
//                   (previous) => !previous
//                 )
//               }
//             >
//               <i className="bi bi-plus-lg me-2"></i>

//               {showUpload
//                 ? "Close Upload"
//                 : "Upload PDF"}
//             </button>
//           </section>

//           {/* Upload */}
//           {showUpload && (
//             <section className="documents-section">
//               <div className="dashboard-panel">

//                 <div className="dashboard-panel-header">
//                   <div>
//                     <span className="panel-eyebrow">
//                       ADD DOCUMENT
//                     </span>

//                     <h5>
//                       Upload a new PDF
//                     </h5>
//                   </div>
//                 </div>

//                 <UploadDropzone
//                   onUpload={handleUpload}
//                 />

//               </div>
//             </section>
//           )}

//           {/* Toolbar */}
//           <section className="documents-section">
//             <DocumentToolbar
//               searchTerm={searchTerm}
//               onSearchChange={setSearchTerm}
//               sortOption={sortOption}
//               onSortChange={setSortOption}
//             />
//           </section>

//           {/* Documents */}
//           <section className="documents-section">
//             <div className="dashboard-panel">

//               <div className="dashboard-panel-header">
//                 <div>
//                   <span className="panel-eyebrow">
//                     ALL DOCUMENTS
//                   </span>

//                   <h5>
//                     {filteredDocuments.length} documents
//                   </h5>
//                 </div>

//                 <span className="documents-count">
//                   PDF Workspace
//                 </span>
//               </div>

//               <DocumentTable
//                 documents={filteredDocuments}
//                 onDelete={handleDelete}
//               />

//             </div>
//           </section>

//         </main>
//       </div>
//     </div>
//   );
// }

// export default Documents;

import { useMemo, useState } from "react";

import Sidebar from "../../components/dashboard/Sidebar";
import DashboardTopbar from "../../components/dashboard/DashboardTopbar";
import DocumentToolbar from "../../components/documents/DocumentToolbar";
import UploadDropzone from "../../components/documents/UploadDropzone";
import DocumentTable from "../../components/documents/DocumentTable";

import {
  mockDocuments,
  addMockDocument,
  removeMockDocument,
} from "../../mock/documentData";

function Documents() {
  const [showUpload, setShowUpload] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");

  const [documents, setDocuments] = useState([
    ...mockDocuments,
  ]);

  const [uploadMessage, setUploadMessage] = useState("");

  const filteredDocuments = useMemo(() => {
    const normalizedSearch = searchTerm
      .toLowerCase()
      .trim();

    const filtered = documents.filter((document) =>
      document.name
        .toLowerCase()
        .includes(normalizedSearch)
    );

    return [...filtered].sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }

      if (sortOption === "size") {
        return (
          parseFloat(a.size) -
          parseFloat(b.size)
        );
      }

      if (sortOption === "oldest") {
        return a.id - b.id;
      }

      return b.id - a.id;
    });
  }, [documents, searchTerm, sortOption]);

  const handleUpload = (file) => {
    const newDocument = {
      id: Date.now(),
      name: file.name,
      size: `${(
        file.size /
        (1024 * 1024)
      ).toFixed(2)} MB`,
      uploadDate: "Just now",
      status: "Processing",
      pages: "--",
    };

    addMockDocument(newDocument);

    setDocuments((previous) => [
      newDocument,
      ...previous,
    ]);

    setUploadMessage(
      `"${file.name}" was uploaded successfully and is now processing.`
    );

    setShowUpload(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (documentId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!shouldDelete) {
      return;
    }

    removeMockDocument(documentId);

    setDocuments((previous) =>
      previous.filter(
        (document) =>
          document.id !== documentId
      )
    );
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardTopbar />

        <main className="dashboard-main documents-main">

          {/* Page Header */}
          <section className="documents-page-header">

            <div>
              <span className="topbar-eyebrow">
                DOCUMENT LIBRARY
              </span>

              <h2>
                Your Documents
              </h2>

              <p>
                Manage your PDF documents and prepare them
                for intelligent search, summaries, and conversations.
              </p>
            </div>

            <button
              type="button"
              className="btn btn-brand"
              onClick={() => {
                setShowUpload(
                  (previous) => !previous
                );

                setUploadMessage("");
              }}
            >
              <i className="bi bi-plus-lg me-2"></i>

              {showUpload
                ? "Close Upload"
                : "Upload PDF"}
            </button>

          </section>

          {/* Upload Success */}
          {uploadMessage && (
            <div
              className="alert alert-success documents-upload-message"
              role="alert"
            >
              <i className="bi bi-check-circle me-2"></i>
              {uploadMessage}

              <button
                type="button"
                className="documents-message-close"
                onClick={() => setUploadMessage("")}
                aria-label="Close upload message"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          )}

          {/* Upload */}
          {showUpload && (
            <section className="documents-section">

              <div className="dashboard-panel">

                <div className="dashboard-panel-header">
                  <div>
                    <span className="panel-eyebrow">
                      ADD DOCUMENT
                    </span>

                    <h5>
                      Upload a new PDF
                    </h5>

                    <p className="documents-upload-subtitle">
                      Add a PDF to start document processing.
                    </p>
                  </div>
                </div>

                <UploadDropzone
                  onUpload={handleUpload}
                />

              </div>

            </section>
          )}

          {/* Toolbar */}
          <section className="documents-section">
            <DocumentToolbar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </section>

          {/* Documents */}
          <section className="documents-section">

            <div className="dashboard-panel">

              <div className="dashboard-panel-header">

                <div>
                  <span className="panel-eyebrow">
                    ALL DOCUMENTS
                  </span>

                  <h5>
                    {filteredDocuments.length} documents
                  </h5>
                </div>

                <span className="documents-count">
                  PDF Workspace
                </span>

              </div>

              <DocumentTable
                documents={filteredDocuments}
                onDelete={handleDelete}
              />

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}

export default Documents;