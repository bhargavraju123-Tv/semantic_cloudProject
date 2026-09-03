function IntelligenceSection() {
  return (
    <section className="intelligence-section section-padding">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left - Visual */}
          <div className="col-lg-6">

            <div className="intelligence-visual">

              <div className="intelligence-card">

                <div className="intelligence-card-header">
                  <div>
                    <small className="text-muted">
                      SEARCH YOUR DOCUMENT
                    </small>

                    <h6 className="mt-1 mb-0">
                      Find what you need
                    </h6>
                  </div>

                  <i className="bi bi-search text-brand fs-4"></i>
                </div>

                <div className="search-mode-toggle mt-4">

                  <button className="search-mode active">
                    <i className="bi bi-search me-2"></i>
                    Keyword
                  </button>

                  <button className="search-mode">
                    <i className="bi bi-stars me-2"></i>
                    Semantic
                  </button>

                </div>

                <div className="intelligence-search-box mt-3">

                  <i className="bi bi-search"></i>

                  <span>
                    Explain the main objective of this document
                  </span>

                </div>

                <div className="intelligence-result mt-3">

                  <div className="result-top">

                    <span className="result-badge">
                      Relevant Result
                    </span>

                    <span className="result-score">
                      High relevance
                    </span>

                  </div>

                  <p className="mt-3 mb-0">
                    Related information was identified from the
                    document based on the meaning of your query.
                  </p>

                </div>

              </div>

              <div className="intelligence-floating-card">

                <div className="intelligence-floating-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <small className="text-muted d-block">
                    AI Understanding
                  </small>

                  <span className="fw-semibold">
                    Context-aware results
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Right - Content */}
          <div className="col-lg-6">

            <span className="section-label">
              INTELLIGENT SEARCH
            </span>

            <h2 className="section-heading mt-3">
              Search beyond
              <span className="text-brand">
                {" "}exact words
              </span>
            </h2>

            <p className="section-description mt-4">
              Traditional keyword search looks for matching words.
              Semantic search goes one step further by understanding
              the meaning behind your query.
            </p>

            <p className="section-description">
              This allows the platform to retrieve conceptually
              relevant information even when the exact words used
              in your query are not present in the document.
            </p>

            <div className="intelligence-points mt-4">

              <div className="intelligence-point">

                <div className="intelligence-point-icon">
                  <i className="bi bi-search"></i>
                </div>

                <div>
                  <h6>Keyword Search</h6>

                  <p>
                    Quickly locate exact terms and phrases.
                  </p>
                </div>

              </div>

              <div className="intelligence-point">

                <div className="intelligence-point-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <h6>Semantic Search</h6>

                  <p>
                    Discover relevant content using meaning and context.
                  </p>
                </div>

              </div>

              <div className="intelligence-point">

                <div className="intelligence-point-icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>

                <div>
                  <h6>RAG-Based Interaction</h6>

                  <p>
                    Use retrieved document context to support
                    AI-powered conversations.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default IntelligenceSection;