// import DocumentRow from "./DocumentRow";

// function DocumentTable({ documents, onDelete }) {
//   if (documents.length === 0) {
//     return (
//       <div className="documents-empty-state">

//         <div className="documents-empty-icon">
//           <i className="bi bi-folder2-open"></i>
//         </div>

//         <h5>No documents found</h5>

//         <p>
//           Try changing your search or upload a new PDF document.
//         </p>

//       </div>
//     );
//   }

//   return (
//     <div className="document-table">

//       <div className="document-table-header">

//         <div>
//           Document
//         </div>

//         <div>
//           Size
//         </div>

//         <div>
//           Uploaded
//         </div>

//         <div>
//           Status
//         </div>

//         <div>
//           Actions
//         </div>

//       </div>

//       <div className="document-table-body">

//         {documents.map((document) => (
//           <DocumentRow
//             key={document.id}
//             document={document}
//             onDelete={onDelete}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// export default DocumentTable;

import DocumentRow from "./DocumentRow";

function DocumentTable({ documents = [], onDelete }) {
  if (documents.length === 0) {
    return (
      <div className="documents-empty-state">
        <div className="documents-empty-icon">
          <i className="bi bi-folder2-open"></i>
        </div>

        <h5>
          No documents found
        </h5>

        <p>
          Try changing your search or upload a new PDF document.
        </p>
      </div>
    );
  }

  return (
    <div className="document-table">

      {/* Table Header */}
      <div
        className="document-table-header"
        role="row"
      >
        <div role="columnheader">
          Document
        </div>

        <div role="columnheader">
          Size
        </div>

        <div role="columnheader">
          Uploaded
        </div>

        <div role="columnheader">
          Status
        </div>

        <div role="columnheader">
          Actions
        </div>
      </div>

      {/* Table Body */}
      <div className="document-table-body">

        {documents.map((document) => (
          <DocumentRow
            key={document.id}
            document={document}
            onDelete={onDelete}
          />
        ))}

      </div>
    </div>
  );
}

export default DocumentTable;