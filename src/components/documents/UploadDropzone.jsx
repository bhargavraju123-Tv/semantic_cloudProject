// import { useRef, useState } from "react";

// function UploadDropzone({ onUpload }) {
//   const fileInputRef = useRef(null);

//   const [isDragging, setIsDragging] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState("");

//   const validateFile = (file) => {
//     if (!file) {
//       return "Please select a PDF file.";
//     }

//     const isPdf =
//       file.type === "application/pdf" ||
//       file.name.toLowerCase().endsWith(".pdf");

//     if (!isPdf) {
//       return "Only PDF files are supported.";
//     }

//     const maxSize = 10 * 1024 * 1024;

//     if (file.size > maxSize) {
//       return "File size must be 10 MB or smaller.";
//     }

//     return "";
//   };

//   const handleFile = (file) => {
//     const validationError = validateFile(file);

//     setError(validationError);

//     if (validationError) {
//       setSelectedFile(null);
//       return;
//     }

//     setSelectedFile(file);
//   };

//   const handleInputChange = (event) => {
//     const file = event.target.files?.[0];

//     handleFile(file);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();

//     setIsDragging(false);

//     const file = event.dataTransfer.files?.[0];

//     handleFile(file);
//   };

//   const handleUpload = () => {
//     if (!selectedFile) {
//       setError("Please select a PDF file first.");
//       return;
//     }

//     onUpload(selectedFile);

//     setSelectedFile(null);
//     setError("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="upload-area">

//       <div
//         className={`upload-dropzone ${
//           isDragging ? "dragging" : ""
//         }`}
//         onDragOver={(event) => {
//           event.preventDefault();
//           setIsDragging(true);
//         }}
//         onDragLeave={() => setIsDragging(false)}
//         onDrop={handleDrop}
//       >

//         <div className="upload-icon">
//           <i className="bi bi-cloud-arrow-up"></i>
//         </div>

//         <h5>
//           Upload a PDF document
//         </h5>

//         <p>
//           Drag and drop your PDF here, or choose a file from your device.
//         </p>

//         <button
//           type="button"
//           className="btn btn-outline-primary"
//           onClick={() => fileInputRef.current?.click()}
//         >
//           <i className="bi bi-folder2-open me-2"></i>
//           Browse PDF
//         </button>

//         <input
//           ref={fileInputRef}
//           type="file"
//           accept=".pdf,application/pdf"
//           className="d-none"
//           onChange={handleInputChange}
//         />

//         <small className="upload-help">
//           PDF only · Maximum size 10 MB
//         </small>

//       </div>

//       {error && (
//         <div className="alert alert-danger mt-3 mb-0">
//           <i className="bi bi-exclamation-circle me-2"></i>
//           {error}
//         </div>
//       )}

//       {selectedFile && !error && (
//         <div className="selected-file-card mt-3">

//           <div className="selected-file-info">

//             <div className="selected-file-icon">
//               <i className="bi bi-file-earmark-pdf"></i>
//             </div>

//             <div>
//               <strong>
//                 {selectedFile.name}
//               </strong>

//               <small>
//                 {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
//               </small>
//             </div>

//           </div>

//           <button
//             type="button"
//             className="btn btn-brand"
//             onClick={handleUpload}
//           >
//             Upload
//             <i className="bi bi-arrow-up-right ms-2"></i>
//           </button>

//         </div>
//       )}

//     </div>
//   );
// }

// export default UploadDropzone;

import { useRef, useState } from "react";

function UploadDropzone({ onUpload }) {
  const fileInputRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState("");

  const validateFile = (file) => {
    if (!file) {
      return "Please select a PDF file.";
    }

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      return "Only PDF files are supported.";
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      return "File size must be 10 MB or smaller.";
    }

    return "";
  };

  const handleFile = (file) => {
    setError("");
    setUploadSuccess("");

    const validationError = validateFile(file);

    if (validationError) {
      setSelectedFile(null);
      setError(validationError);
      return;
    }

    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    handleFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a PDF file first.");
      return;
    }

    setError("");
    setUploadSuccess("");
    setIsUploading(true);

    try {
      /*
        Temporary frontend upload simulation.

        Later:

        await documentService.upload(
          selectedFile,
          (progress) => setUploadProgress(progress)
        );
      */

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      onUpload?.(selectedFile);

      setSelectedFile(null);
      setUploadSuccess(
        "PDF uploaded successfully and processing has started."
      );

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (uploadError) {
      console.error(
        "Upload failed:",
        uploadError
      );

      setError(
        "Unable to upload the PDF. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    if (isUploading) {
      return;
    }

    setSelectedFile(null);
    setError("");
    setUploadSuccess("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="upload-area">

      {/* Drop Zone */}
      <div
        className={`upload-dropzone ${
          isDragging ? "dragging" : ""
        }`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="upload-icon">
          <i className="bi bi-cloud-arrow-up"></i>
        </div>

        <h5>
          Upload a PDF document
        </h5>

        <p>
          Drag and drop your PDF here, or choose a file from your device.
        </p>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          <i className="bi bi-folder2-open me-2"></i>

          Browse PDF
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="d-none"
          onChange={handleInputChange}
          disabled={isUploading}
        />

        <small className="upload-help">
          PDF only · Maximum size 10 MB
        </small>
      </div>

      {/* Error */}
      {error && (
        <div
          className="alert alert-danger mt-3 mb-0"
          role="alert"
        >
          <i className="bi bi-exclamation-circle me-2"></i>
          {error}
        </div>
      )}

      {/* Success */}
      {uploadSuccess && (
        <div
          className="alert alert-success mt-3 mb-0"
          role="alert"
        >
          <i className="bi bi-check-circle me-2"></i>
          {uploadSuccess}
        </div>
      )}

      {/* Selected File */}
      {selectedFile && !error && (
        <div className="selected-file-card mt-3">

          <div className="selected-file-info">

            <div className="selected-file-icon">
              <i className="bi bi-file-earmark-pdf"></i>
            </div>

            <div className="selected-file-details">
              <strong>
                {selectedFile.name}
              </strong>

              <small>
                {(
                  selectedFile.size /
                  (1024 * 1024)
                ).toFixed(2)} MB
              </small>
            </div>

          </div>

          <div className="selected-file-actions">

            <button
              type="button"
              className="upload-remove-button"
              onClick={handleRemoveFile}
              disabled={isUploading}
              title="Remove selected file"
              aria-label="Remove selected file"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <button
              type="button"
              className="btn btn-brand"
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>

                  Uploading...
                </>
              ) : (
                <>
                  Upload
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </>
              )}
            </button>

          </div>
        </div>
      )}

      {/* Upload Guidance */}
      <div className="upload-guidance">
        <div>
          <i className="bi bi-shield-check"></i>
          <span>Secure PDF upload</span>
        </div>

        <div>
          <i className="bi bi-file-earmark-text"></i>
          <span>PDF documents only</span>
        </div>

        <div>
          <i className="bi bi-lightning-charge"></i>
          <span>AI processing after upload</span>
        </div>
      </div>

    </div>
  );
}

export default UploadDropzone;