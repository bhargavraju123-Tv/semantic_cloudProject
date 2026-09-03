function TechnologySection() {
  const technologies = [
    {
      icon: "bi-code-slash",
      title: "React",
      description: "Responsive and component-based user interface.",
      category: "Frontend",
    },
    {
      icon: "bi-bootstrap",
      title: "Bootstrap",
      description: "Responsive layout and consistent UI components.",
      category: "UI",
    },
    {
      icon: "bi-diagram-3",
      title: "Spring Boot",
      description: "Backend services and REST API architecture.",
      category: "Backend",
    },
    {
      icon: "bi-file-earmark-pdf",
      title: "Apache PDFBox",
      description: "PDF content extraction and document processing.",
      category: "Processing",
    },
    {
      icon: "bi-database",
      title: "MySQL",
      description: "Structured application and user data storage.",
      category: "Database",
    },
    {
      icon: "bi-layers",
      title: "ChromaDB",
      description: "Vector storage for semantic retrieval workflows.",
      category: "Vector DB",
    },
  ];

  return (
    <section className="technology-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">

          <span className="section-label">
            TECHNOLOGY STACK
          </span>

          <h2 className="section-heading mx-auto mt-3">
            Built for
            <span className="text-brand"> intelligent document workflows</span>
          </h2>

          <p className="section-subtitle mt-3">
            A modular technology stack designed to keep the user interface,
            backend services, document processing, structured data, and
            semantic retrieval cleanly separated.
          </p>

        </div>

        {/* Architecture Flow */}
        <div className="architecture-flow mb-5">

          <div className="architecture-node">
            <i className="bi bi-window"></i>
            <span>React UI</span>
          </div>

          <div className="architecture-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className="architecture-node">
            <i className="bi bi-diagram-3"></i>
            <span>REST API</span>
          </div>

          <div className="architecture-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className="architecture-node">
            <i className="bi bi-file-earmark-pdf"></i>
            <span>PDF Processing</span>
          </div>

          <div className="architecture-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className="architecture-node">
            <i className="bi bi-stars"></i>
            <span>Semantic / RAG</span>
          </div>

        </div>

        {/* Technology Cards */}
        <div className="row g-4">

          {technologies.map((technology) => (
            <div
              className="col-md-6 col-lg-4"
              key={technology.title}
            >
              <div className="technology-card h-100">

                <div className="technology-card-top">

                  <div className="technology-icon">
                    <i className={`bi ${technology.icon}`}></i>
                  </div>

                  <span className="technology-category">
                    {technology.category}
                  </span>

                </div>

                <h5 className="technology-title">
                  {technology.title}
                </h5>

                <p className="technology-description">
                  {technology.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;