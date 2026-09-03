import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      form: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccessMessage("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    /*
      Temporary frontend authentication.

      Later this block will call:

      authService.login({
        email: formData.email,
        password: formData.password
      });

      and use the JWT returned by Spring Boot.
    */

    setTimeout(() => {
      const mockUser = {
        id: 1,
        name: "Bhargav",
        email: formData.email.trim(),
      };

      const mockToken = "mock-jwt-token";

      login(mockUser, mockToken);

      setIsSubmitting(false);
      setSuccessMessage("Login successful. Redirecting...");

      setTimeout(() => {
        const redirectPath =
          location.state?.from || "/dashboard";

        navigate(redirectPath, { replace: true });
      }, 800);
    }, 700);
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

        {/* Login Card */}
        <section className="auth-card">

          <div className="auth-header">
            <span className="auth-label">
              WELCOME BACK
            </span>

            <h1>
              Sign in to
              <span className="text-brand">
                {" "}Semantic Search
              </span>
            </h1>

            <p>
              Access your documents, semantic search,
              summaries, and Chat with PDF workspace.
            </p>
          </div>

          {/* Success */}
          {successMessage && (
            <div
              className="alert alert-success"
              role="alert"
            >
              <i className="bi bi-check-circle me-2"></i>
              {successMessage}
            </div>
          )}

          {/* General Error */}
          {errors.form && (
            <div
              className="alert alert-danger"
              role="alert"
            >
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email Address
              </label>

              <div className="auth-input-wrapper">
                <i className="bi bi-envelope auth-input-icon"></i>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control auth-input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {errors.email && (
                <div className="invalid-feedback d-block">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>

              <div className="auth-input-wrapper">
                <i className="bi bi-lock auth-input-icon"></i>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={`form-control auth-input auth-input-with-action ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  <i
                    className={`bi ${
                      showPassword
                        ? "bi-eye-slash"
                        : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>

              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check">
                <input
                  id="rememberMe"
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(
                      event.target.checked
                    )
                  }
                />

                <label
                  htmlFor="rememberMe"
                  className="form-check-label"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="auth-action-link"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
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

                  Signing In...
                </>
              ) : (
                <>
                  Login
                  <i className="bi bi-arrow-right ms-2"></i>
                </>
              )}
            </button>
          </form>

          {/* Register */}
          <div className="auth-footer">
            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Register
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

export default Login;