// import { useState } from "react";

// function DocumentSummary({ document }) {
//   const [summary, setSummary] = useState(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleGenerateSummary = () => {
//     setIsGenerating(true);

//     // Temporary frontend simulation.
//     // Later this will call summaryService.generateSummary().
//     setTimeout(() => {
//       setSummary({
//         overview:
//           "This document contains information related to its primary subject and provides structured content across multiple sections.",
//         keyPoints: [
//           "The document introduces the main concepts and objectives.",
//           "Important information is organized across multiple sections.",
//           "The content can be explored through semantic search and document-based questions.",
//         ],
//       });

//       setIsGenerating(false);
//     }, 1000);
//   };

//   if (document.status !== "Processed") {
//     return (
//       <div className="dashboard-panel">

//         <div className="dashboard-panel-header">
//           <div>
//             <span className="panel-eyebrow">
//               AI SUMMARY
//             </span>

//             <h5>
//               Summary unavailable
//             </h5>
//           </div>
//         </div>

//         <div className="summary-processing-state">

//           <div className="summary-processing-icon">
//             <i className="bi bi-hourglass-split"></i>
//           </div>

//           <h6>
//             Document is still processing
//           </h6>

//           <p>
//             AI summarization will become available after
//             document processing is complete.
//           </p>

//         </div>

//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-panel">

//       <div className="dashboard-panel-header">

//         <div>
//           <span className="panel-eyebrow">
//             AI SUMMARY
//           </span>

//           <h5>
//             Document Summary
//           </h5>
//         </div>

//         <button
//           type="button"
//           className="btn btn-brand btn-sm"
//           onClick={handleGenerateSummary}
//           disabled={isGenerating}
//         >
//           {isGenerating ? (
//             <>
//               <span
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 aria-hidden="true"
//               ></span>

//               Generating...
//             </>
//           ) : (
//             <>
//               <i className="bi bi-stars me-2"></i>
//               {summary
//                 ? "Regenerate Summary"
//                 : "Generate Summary"}
//             </>
//           )}
//         </button>

//       </div>

//       {!summary && !isGenerating && (
//         <div className="summary-empty-state">

//           <div className="summary-empty-icon">
//             <i className="bi bi-stars"></i>
//           </div>

//           <h6>
//             Generate an AI summary
//           </h6>

//           <p>
//             Create a concise overview of this document
//             when you're ready.
//           </p>

//         </div>
//       )}

//       {isGenerating && (
//         <div className="summary-loading-state">

//           <div className="summary-loading-line wide"></div>
//           <div className="summary-loading-line"></div>
//           <div className="summary-loading-line"></div>
//           <div className="summary-loading-line medium"></div>

//         </div>
//       )}

//       {summary && !isGenerating && (
//         <div className="summary-content">

//           <div className="summary-overview">

//             <h6>
//               Overview
//             </h6>

//             <p>
//               {summary.overview}
//             </p>

//           </div>

//           <div className="summary-key-points mt-4">

//             <h6>
//               Key Points
//             </h6>

//             <ul>
//               {summary.keyPoints.map((point, index) => (
//                 <li key={index}>
//                   <i className="bi bi-check2-circle"></i>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default DocumentSummary;

import { useState } from "react";
import summaryService from "../../services/summaryService";

function DocumentSummary({ document }) {
  const [summary, setSummary] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const getMockSummary = () => ({
    overview:
      "This document contains information related to its primary subject and provides structured content across multiple sections.",

    keyPoints: [
      "The document introduces the main concepts and objectives.",
      "Important information is organized across multiple sections.",
      "The content can be explored through semantic search and document-based questions.",
    ],
  });

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    setError("");

    try {
      /*
        Backend integration:

        const response =
          await summaryService.generateSummary(document.id);

        Example expected response:

        {
          success: true,
          data: {
            overview: "...",
            keyPoints: [...]
          }
        }
      */

      const response =
        await summaryService.generateSummary(document.id);

      const generatedSummary =
        response?.data || response;

      if (
        generatedSummary?.overview &&
        Array.isArray(generatedSummary?.keyPoints)
      ) {
        setSummary(generatedSummary);
      } else {
        throw new Error(
          "Invalid summary response."
        );
      }
    } catch (requestError) {
      /*
        Backend is not running yet.

        During frontend development we use the
        existing mock summary so the UI remains testable.

        Once Spring Boot is connected successfully,
        this fallback can be removed.
      */

      console.warn(
        "Summary API unavailable. Using mock summary.",
        requestError
      );

      setSummary(getMockSummary());
      setError("");
    } finally {
      setIsGenerating(false);
    }
  };

  if (document.status !== "Processed") {
    return (
      <div className="dashboard-panel">
        <div className="dashboard-panel-header">
          <div>
            <span className="panel-eyebrow">
              AI SUMMARY
            </span>

            <h5>
              Summary unavailable
            </h5>
          </div>
        </div>

        <div className="summary-processing-state">
          <div className="summary-processing-icon">
            <i className="bi bi-hourglass-split"></i>
          </div>

          <h6>
            Document is still processing
          </h6>

          <p>
            AI summarization will become available after
            document processing is complete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-panel">

      <div className="dashboard-panel-header">
        <div>
          <span className="panel-eyebrow">
            AI SUMMARY
          </span>

          <h5>
            Document Summary
          </h5>
        </div>

        <button
          type="button"
          className="btn btn-brand btn-sm"
          onClick={handleGenerateSummary}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>

              Generating...
            </>
          ) : (
            <>
              <i className="bi bi-stars me-2"></i>

              {summary
                ? "Regenerate Summary"
                : "Generate Summary"}
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="alert alert-danger mt-3">
          <i className="bi bi-exclamation-circle me-2"></i>
          {error}
        </div>
      )}

      {!summary && !isGenerating && (
        <div className="summary-empty-state">

          <div className="summary-empty-icon">
            <i className="bi bi-stars"></i>
          </div>

          <h6>
            Generate an AI summary
          </h6>

          <p>
            Create a concise overview of this document
            when you're ready.
          </p>

        </div>
      )}

      {isGenerating && (
        <div className="summary-loading-state">
          <div className="summary-loading-line wide"></div>
          <div className="summary-loading-line"></div>
          <div className="summary-loading-line"></div>
          <div className="summary-loading-line medium"></div>
        </div>
      )}

      {summary && !isGenerating && (
        <div className="summary-content">

          <div className="summary-overview">
            <h6>
              Overview
            </h6>

            <p>
              {summary.overview}
            </p>
          </div>

          <div className="summary-key-points mt-4">
            <h6>
              Key Points
            </h6>

            <ul>
              {summary.keyPoints.map(
                (point, index) => (
                  <li key={index}>
                    <i className="bi bi-check2-circle"></i>

                    <span>
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default DocumentSummary;