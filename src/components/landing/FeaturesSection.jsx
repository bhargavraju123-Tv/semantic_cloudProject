// function FeaturesSection() {
//   const features = [
//     {
//       icon: "bi-file-earmark-pdf",
//       title: "PDF Document Management",
//       description:
//         "Upload and organize your PDF documents in one structured workspace.",
//       className: "feature-blue",
//     },
//     {
//       icon: "bi-search",
//       title: "Keyword Search",
//       description:
//         "Quickly find exact words and phrases across the content of your documents.",
//       className: "feature-orange",
//     },
//     {
//       icon: "bi-stars",
//       title: "Semantic Search",
//       description:
//         "Search using natural language and discover content based on meaning and context.",
//       className: "feature-blue",
//     },
//     {
//       icon: "bi-file-text",
//       title: "AI Summarization",
//       description:
//         "Generate concise AI-powered summaries from your uploaded PDF documents.",
//       className: "feature-orange",
//     },
//     {
//       icon: "bi-chat-square-text",
//       title: "Chat With Your PDF",
//       description:
//         "Ask questions about your document and receive context-aware answers.",
//       className: "feature-blue",
//     },
//     {
//       icon: "bi-shield-check",
//       title: "Secure Workflow",
//       description:
//         "Keep document access and user interactions within an authenticated workflow.",
//       className: "feature-orange",
//     },
//   ];

//   return (
//     <section id="features" className="features-section section-padding">
//       <div className="container">

//         {/* Section Header */}
//         <div className="text-center mb-5">

//           <span className="section-label">
//             PLATFORM FEATURES
//           </span>

//           <h2 className="section-heading mx-auto mt-3">
//             Everything you need to
//             <span className="text-brand"> work with PDFs smarter</span>
//           </h2>

//           <p className="section-subtitle mt-3">
//             From document upload to semantic search and AI-powered
//             understanding, the platform brings the complete workflow
//             into one place.
//           </p>

//         </div>

//         {/* Feature Cards */}
//         <div className="row g-4">

//           {features.map((feature, index) => (
//             <div className="col-md-6 col-lg-4" key={index}>

//               <div className="feature-card h-100">

//                 <div className={`feature-icon ${feature.className}`}>
//                   <i className={`bi ${feature.icon}`}></i>
//                 </div>

//                 <h5 className="feature-title">
//                   {feature.title}
//                 </h5>

//                 <p className="feature-description">
//                   {feature.description}
//                 </p>

//                 <div className="feature-arrow">
//                   <i className="bi bi-arrow-up-right"></i>
//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;

function FeaturesSection() {
  const features = [
    {
      icon: "bi-file-earmark-pdf",
      title: "PDF Document Management",
      description:
        "Upload and organize your PDF documents in one structured workspace.",
      className: "feature-blue",
    },
    {
      icon: "bi-search",
      title: "Keyword Search",
      description:
        "Quickly find exact words and phrases across the content of your documents.",
      className: "feature-orange",
    },
    {
      icon: "bi-stars",
      title: "Semantic Search",
      description:
        "Search using natural language and discover content based on meaning and context.",
      className: "feature-blue",
    },
    {
      icon: "bi-file-text",
      title: "AI Summarization",
      description:
        "Generate concise AI-powered summaries from your uploaded PDF documents.",
      className: "feature-orange",
    },
    {
      icon: "bi-chat-square-text",
      title: "Chat With Your PDF",
      description:
        "Ask questions about your document and receive context-aware answers.",
      className: "feature-blue",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Workflow",
      description:
        "Keep document access and user interactions within an authenticated workflow.",
      className: "feature-orange",
    },
  ];

  return (
    <section
      id="features"
      className="features-section section-padding landing-animate"
    >
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-label">
            PLATFORM FEATURES
          </span>

          <h2 className="section-heading mx-auto mt-3">
            Everything you need to
            <span className="text-brand">
              {" "}work with PDFs smarter
            </span>
          </h2>

          <p className="section-subtitle mt-3">
            From document upload to semantic search and AI-powered
            understanding, the platform brings the complete workflow
            into one place.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
            >
              <div className="feature-card h-100">

                <div
                  className={`feature-icon ${feature.className}`}
                >
                  <i
                    className={`bi ${feature.icon}`}
                  ></i>
                </div>

                <h5 className="feature-title">
                  {feature.title}
                </h5>

                <p className="feature-description">
                  {feature.description}
                </p>

                <div className="feature-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;