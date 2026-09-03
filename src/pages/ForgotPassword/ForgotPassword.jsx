import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Temporary frontend-only simulation.
    // Later this will call authService.forgotPassword().
    setTimeout(() => {
      setIsSubmitting(false);

      setSuccessMessage(
        "If an account exists with this email, reset instructions will be sent."
      );
    }, 900);
  };

  return (
    <main className="auth-page">
      <div className="auth-wrapper">

        {/* Brand */}
        <Link to="/" className="auth-brand">
          <span className="auth-brand-icon">
            <i className="bi bi-search"></i>
          </span>

          <span>Semantic Search</span>
        </Link>

        {/* Forgot Password Card */}
        <section className="auth-card">

          <div className="auth-header">

            <span className="auth-label">
              ACCOUNT RECOVERY
            </span>

            <div className="recovery-icon mt-3">
              <i className="bi bi-key"></i>
            </div>

            <h1 className="mt-3">
              Forgot your
              <span className="text-brand"> password?</span>
            </h1>

            <p>
              Enter the email address associated with your account
              and we will help you get back into your workspace.
            </p>

          </div>

          {/* Success */}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              <i className="bi bi-check-circle me-2"></i>
              {successMessage}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>

            <div className="mb-4">

              <label
                htmlFor="forgotEmail"
                className="form-label"
              >
                Email Address
              </label>

              <div className="auth-input-wrapper">

                <i className="bi bi-envelope auth-input-icon"></i>

                <input
                  id="forgotEmail"
                  type="email"
                  className={`form-control auth-input ${
                    error ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                    setSuccessMessage("");
                  }}
                  autoComplete="email"
                />

              </div>

              {error && (
                <div className="invalid-feedback d-block">
                  {error}
                </div>
              )}

            </div>

            <button
              type="submit"
              className="btn btn-brand auth-submit w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>

                  Sending...
                </>
              ) : (
                <>
                  Send Reset Link
                  <i className="bi bi-arrow-right ms-2"></i>
                </>
              )}
            </button>

          </form>

          <div className="auth-footer">
            <Link to="/login">
              <i className="bi bi-arrow-left me-1"></i>
              Back to Login
            </Link>
          </div>

        </section>

        <p className="auth-bottom-text">
          Secure document intelligence platform
        </p>

      </div>
    </main>
  );
}

export default ForgotPassword;