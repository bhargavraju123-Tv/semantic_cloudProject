// function AboutSection() {
//   return (
//     <section id="about" className="about-section section-padding">
//       <div className="container">

//         <div className="row align-items-center g-5">

//           {/* Left Content */}
//           <div className="col-lg-6">

//             <span className="section-label">
//               ABOUT THE PLATFORM
//             </span>

//             <h2 className="section-heading mt-3">
//               A smarter way to
//               <span className="text-brand"> understand your documents</span>
//             </h2>

//             <p className="section-description mt-4">
//               Semantic Search is designed to help users work with their
//               PDF documents more intelligently. Instead of manually going
//               through pages, users can upload documents and discover
//               relevant information using meaning-based search.
//             </p>

//             <p className="section-description">
//               The platform brings document search, AI-powered summarization,
//               and conversational interaction into one structured workflow.
//             </p>

//             <div className="about-highlights mt-4">

//               <div className="about-highlight">
//                 <div className="about-highlight-icon">
//                   <i className="bi bi-search"></i>
//                 </div>

//                 <div>
//                   <h6>Search by Meaning</h6>
//                   <p>
//                     Find relevant content based on the meaning of your query,
//                     not just exact keywords.
//                   </p>
//                 </div>
//               </div>

//               <div className="about-highlight">
//                 <div className="about-highlight-icon">
//                   <i className="bi bi-stars"></i>
//                 </div>

//                 <div>
//                   <h6>AI-Assisted Understanding</h6>
//                   <p>
//                     Generate useful summaries and interact with information
//                     contained inside your documents.
//                   </p>
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* Right Visual */}
//           <div className="col-lg-6">

//             <div className="about-visual">

//               <div className="about-main-card">

//                 <div className="about-card-top">
//                   <div className="about-icon-large">
//                     <i className="bi bi-file-earmark-text"></i>
//                   </div>

//                   <div>
//                     <span className="small text-muted">
//                       DOCUMENT INTELLIGENCE
//                     </span>

//                     <h5 className="mb-0 mt-1">
//                       Your documents,
//                       <br />
//                       easier to understand.
//                     </h5>
//                   </div>
//                 </div>

//                 <div className="about-flow mt-4">

//                   <div className="about-flow-item">
//                     <span className="about-flow-number">01</span>
//                     <span>Upload PDF</span>
//                   </div>

//                   <div className="about-flow-line"></div>

//                   <div className="about-flow-item">
//                     <span className="about-flow-number">02</span>
//                     <span>Process Content</span>
//                   </div>

//                   <div className="about-flow-line"></div>

//                   <div className="about-flow-item">
//                     <span className="about-flow-number">03</span>
//                     <span>Search & Understand</span>
//                   </div>

//                 </div>

//               </div>

//               <div className="about-floating-card">
//                 <i className="bi bi-lightning-charge-fill"></i>

//                 <div>
//                   <small className="text-muted d-block">
//                     Intelligent Workflow
//                   </small>

//                   <span className="fw-semibold">
//                     Search → Summarize → Chat
//                   </span>
//                 </div>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default AboutSection;


function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-padding landing-animate"
    >
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <span className="section-label">
              ABOUT THE PLATFORM
            </span>

            <h2 className="section-heading mt-3">
              A smarter way to
              <span className="text-brand">
                {" "}understand your documents
              </span>
            </h2>

            <p className="section-description mt-4">
              Semantic Search is designed to help users work with their
              PDF documents more intelligently. Instead of manually going
              through pages, users can upload documents and discover
              relevant information using meaning-based search.
            </p>

            <p className="section-description">
              The platform brings document search, AI-powered summarization,
              and conversational interaction into one structured workflow.
            </p>

            <div className="about-highlights mt-4">

              <div className="about-highlight">
                <div className="about-highlight-icon">
                  <i className="bi bi-search"></i>
                </div>

                <div>
                  <h6>
                    Search by Meaning
                  </h6>

                  <p>
                    Find relevant content based on the meaning of your query,
                    not just exact keywords.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <div className="about-highlight-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <h6>
                    AI-Assisted Understanding
                  </h6>

                  <p>
                    Generate useful summaries and interact with information
                    contained inside your documents.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-6">

            <div className="about-visual">

              <div className="about-main-card">
                <div className="about-card-top">

                  <div className="about-icon-large">
                    <i className="bi bi-file-earmark-text"></i>
                  </div>

                  <div>
                    <span className="small text-muted">
                      DOCUMENT INTELLIGENCE
                    </span>

                    <h5 className="mb-0 mt-1">
                      Your documents,
                      <br />
                      easier to understand.
                    </h5>
                  </div>

                </div>

                <div className="about-flow mt-4">

                  <div className="about-flow-item">
                    <span className="about-flow-number">
                      01
                    </span>

                    <span>
                      Upload PDF
                    </span>
                  </div>

                  <div className="about-flow-line"></div>

                  <div className="about-flow-item">
                    <span className="about-flow-number">
                      02
                    </span>

                    <span>
                      Process Content
                    </span>
                  </div>

                  <div className="about-flow-line"></div>

                  <div className="about-flow-item">
                    <span className="about-flow-number">
                      03
                    </span>

                    <span>
                      Search & Understand
                    </span>
                  </div>

                </div>
              </div>

              <div className="about-floating-card">
                <i className="bi bi-lightning-charge-fill"></i>

                <div>
                  <small className="text-muted d-block">
                    Intelligent Workflow
                  </small>

                  <span className="fw-semibold">
                    Search → Summarize → Chat
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;