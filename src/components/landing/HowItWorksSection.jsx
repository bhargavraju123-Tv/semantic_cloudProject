// function HowItWorksSection() {
//   const steps = [
//     {
//       number: "01",
//       icon: "bi-cloud-arrow-up",
//       title: "Upload Your PDF",
//       description:
//         "Sign in and upload the PDF document you want to search, understand, and explore.",
//     },
//     {
//       number: "02",
//       icon: "bi-file-earmark-text",
//       title: "Process the Document",
//       description:
//         "The document content is extracted and prepared so that its information can be searched efficiently.",
//     },
//     {
//       number: "03",
//       icon: "bi-database",
//       title: "Build Searchable Knowledge",
//       description:
//         "Document content is organized into a searchable representation for meaningful information retrieval.",
//     },
//     {
//       number: "04",
//       icon: "bi-search",
//       title: "Search by Keyword or Meaning",
//       description:
//         "Choose keyword search for exact matches or semantic search to find conceptually relevant content.",
//     },
//     {
//       number: "05",
//       icon: "bi-stars",
//       title: "Summarize or Chat",
//       description:
//         "Generate an AI summary or ask questions about the document using its relevant context.",
//     },
//   ];

//   return (
//     <section id="how-it-works" className="how-it-works-section section-padding">
//       <div className="container">

//         {/* Section Header */}
//         <div className="text-center mb-5">

//           <span className="section-label">
//             HOW IT WORKS
//           </span>

//           <h2 className="section-heading mx-auto mt-3">
//             From PDF to
//             <span className="text-brand"> intelligent answers</span>
//           </h2>

//           <p className="section-subtitle mt-3">
//             A simple workflow that takes your document from upload
//             to search, summarization, and conversational interaction.
//           </p>

//         </div>

//         {/* Steps */}
//         <div className="workflow-container">

//           {steps.map((step, index) => (
//             <div className="workflow-step" key={step.number}>

//               {/* Connector */}
//               {index !== steps.length - 1 && (
//                 <div className="workflow-connector"></div>
//               )}

//               {/* Step Number */}
//               <div className="workflow-number">
//                 {step.number}
//               </div>

//               {/* Icon */}
//               <div className="workflow-icon">
//                 <i className={`bi ${step.icon}`}></i>
//               </div>

//               {/* Content */}
//               <div className="workflow-content">

//                 <h5>
//                   {step.title}
//                 </h5>

//                 <p>
//                   {step.description}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//         {/* Bottom Highlight */}
//         <div className="workflow-highlight mt-5">

//           <div className="workflow-highlight-icon">
//             <i className="bi bi-lightning-charge-fill"></i>
//           </div>

//           <div>
//             <h6>
//               One document. Multiple ways to understand it.
//             </h6>

//             <p>
//               Search specific information, discover related concepts,
//               generate a summary, or interact with the document through
//               contextual questions.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default HowItWorksSection;


function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: "bi-cloud-arrow-up",
      title: "Upload Your PDF",
      description:
        "Sign in and upload the PDF document you want to search, understand, and explore.",
    },
    {
      number: "02",
      icon: "bi-file-earmark-text",
      title: "Process the Document",
      description:
        "The document content is extracted and prepared so that its information can be searched efficiently.",
    },
    {
      number: "03",
      icon: "bi-database",
      title: "Build Searchable Knowledge",
      description:
        "Document content is organized into a searchable representation for meaningful information retrieval.",
    },
    {
      number: "04",
      icon: "bi-search",
      title: "Search by Keyword or Meaning",
      description:
        "Choose keyword search for exact matches or semantic search to find conceptually relevant content.",
    },
    {
      number: "05",
      icon: "bi-stars",
      title: "Summarize or Chat",
      description:
        "Generate an AI summary or ask questions about the document using its relevant context.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="how-it-works-section section-padding landing-animate"
    >
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2 className="section-heading mx-auto mt-3">
            From PDF to
            <span className="text-brand">
              {" "}intelligent answers
            </span>
          </h2>

          <p className="section-subtitle mt-3">
            A simple workflow that takes your document from upload
            to search, summarization, and conversational interaction.
          </p>
        </div>

        <div className="workflow-container">
          {steps.map((step, index) => (
            <div
              className="workflow-step"
              key={step.number}
            >
              {index !== steps.length - 1 && (
                <div className="workflow-connector"></div>
              )}

              <div className="workflow-number">
                {step.number}
              </div>

              <div className="workflow-icon">
                <i
                  className={`bi ${step.icon}`}
                ></i>
              </div>

              <div className="workflow-content">
                <h5>
                  {step.title}
                </h5>

                <p>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="workflow-highlight mt-5">

          <div className="workflow-highlight-icon">
            <i className="bi bi-lightning-charge-fill"></i>
          </div>

          <div>
            <h6>
              One document. Multiple ways to understand it.
            </h6>

            <p>
              Search specific information, discover related concepts,
              generate a summary, or interact with the document through
              contextual questions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;