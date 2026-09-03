import { Link } from "react-router-dom";
// import Footer from "../../components/landing/Footer";
function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-5">

            <Link
              to="/"
              className="footer-brand"
            >
              <i className="bi bi-search me-2"></i>
              Semantic Search
            </Link>

            <p className="footer-description mt-3">
              An intelligent document platform designed to help users
              search, understand, summarize, and interact with PDF
              documents more efficiently.
            </p>

          </div>

          {/* Platform */}
          <div className="col-6 col-lg-2">

            <h6 className="footer-heading">
              Platform
            </h6>

            <ul className="footer-links">

              <li>
                <a href="#features">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#about">
                  About
                </a>
              </li>

            </ul>

          </div>

          {/* Account */}
          <div className="col-6 col-lg-2">

            <h6 className="footer-heading">
              Account
            </h6>

            <ul className="footer-links">

              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/forgot-password">
                  Forgot Password
                </Link>
              </li>

            </ul>

          </div>

          {/* Technology */}
          <div className="col-12 col-lg-3">

            <h6 className="footer-heading">
              Technology
            </h6>

            <p className="footer-tech">
              React · Bootstrap · Spring Boot · REST API ·
              Apache PDFBox · MySQL · ChromaDB
            </p>

          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Semantic Search.
            All rights reserved.
          </span>

          <span>
            Intelligent Document Search Platform
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;