import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section section-padding">
      <div className="container">

        <div className="cta-card">

          <div className="cta-content">

            <span className="cta-label">
              START EXPLORING YOUR DOCUMENTS
            </span>

            <h2>
              Your documents contain the answers.
              <span> Find them faster.</span>
            </h2>

            <p>
              Upload your PDF documents and experience a smarter way
              to search, summarize, and interact with your information.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

              <Link
                to="/register"
                className="btn btn-light btn-lg px-4"
              >
                Create Your Account
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

              <Link
                to="/login"
                className="btn btn-outline-light btn-lg px-4"
              >
                Sign In
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTASection;