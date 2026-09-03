function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-75 g-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <div className="hero-badge mb-4">
              <i className="bi bi-stars me-2"></i>
              Intelligent Document Search
            </div>

            <h1 className="hero-title">
              Turn Your PDFs Into
              <span className="text-brand"> Knowledge</span>
            </h1>

            <p className="hero-description mt-4">
              Upload your documents, search them using natural language,
              generate AI-powered summaries, and interact with your PDFs
              through an intelligent conversational experience.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">

              <a
                href="/register"
                className="btn btn-brand btn-lg px-4"
              >
                Get Started
                <i className="bi bi-arrow-right ms-2"></i>
              </a>

              <a
                href="#features"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Explore Features
              </a>

            </div>

            <div className="hero-trust mt-4">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-pdf text-danger"></i>
                <span>PDF-focused document intelligence</span>
              </div>

              <div className="d-flex align-items-center gap-2 mt-2">
                <i className="bi bi-shield-check text-brand"></i>
                <span>Secure and structured document workflow</span>
              </div>
            </div>

          </div>

          {/* Right Visual */}
          <div className="col-lg-6">

            <div className="hero-visual">

              <div className="document-card main-document-card">

                <div className="document-card-header">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-file-earmark-pdf-fill text-danger fs-4"></i>
                    <span className="fw-semibold">
                      Research_Document.pdf
                    </span>
                  </div>

                  <span className="badge bg-success-subtle text-success">
                    Ready
                  </span>
                </div>

                <div className="document-lines mt-4">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="short-line"></span>
                </div>

                <div className="search-preview mt-4">

                  <div className="search-preview-header">
                    <i className="bi bi-search text-brand"></i>
                    <span>Semantic Search</span>
                  </div>

                  <div className="search-query">
                    How does semantic search work?
                  </div>

                  <div className="search-result">
                    <div className="result-icon">
                      <i className="bi bi-stars"></i>
                    </div>

                    <div>
                      <div className="fw-semibold">
                        Relevant document content found
                      </div>

                      <small className="text-muted">
                        Meaning-based results from your uploaded PDF
                      </small>
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating AI Card */}
              <div className="floating-card ai-card">
                <div className="floating-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <small className="text-muted d-block">
                    AI Summary
                  </small>
                  <span className="fw-semibold">
                    Summary generated
                  </span>
                </div>
              </div>

              {/* Floating Search Card */}
              <div className="floating-card search-card">
                <div className="floating-icon">
                  <i className="bi bi-search"></i>
                </div>

                <div>
                  <small className="text-muted d-block">
                    Search Mode
                  </small>
                  <span className="fw-semibold">
                    Semantic
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

export default HeroSection;