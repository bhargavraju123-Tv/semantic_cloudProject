// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setErrors((previous) => ({
//       ...previous,
//       [name]: "",
//       form: "",
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required.";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters.";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password.";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setSuccessMessage("");

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);

//     // Temporary frontend-only registration simulation.
//     // This will be replaced by authService + Spring Boot REST API later.
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSuccessMessage(
//         "Account created successfully. Redirecting to login..."
//       );

//       setTimeout(() => {
//         navigate("/login");
//       }, 1200);
//     }, 700);
//   };

//   return (
//     <main className="auth-page">

//       <div className="auth-wrapper">

//         {/* Brand */}
//         <Link to="/" className="auth-brand">
//           <span className="auth-brand-icon">
//             <i className="bi bi-search"></i>
//           </span>

//           <span>Semantic Search</span>
//         </Link>

//         {/* Register Card */}
//         <section className="auth-card">

//           <div className="auth-header">
//             <span className="auth-label">
//               CREATE ACCOUNT
//             </span>

//             <h1>
//               Get started with
//               <span className="text-brand"> Semantic Search</span>
//             </h1>

//             <p>
//               Create your account to securely manage, search,
//               summarize, and interact with your PDF documents.
//             </p>
//           </div>

//           {/* Success Message */}
//           {successMessage && (
//             <div className="alert alert-success" role="alert">
//               <i className="bi bi-check-circle me-2"></i>
//               {successMessage}
//             </div>
//           )}

//           {/* General Error */}
//           {errors.form && (
//             <div className="alert alert-danger" role="alert">
//               {errors.form}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} noValidate>

//             {/* Full Name */}
//             <div className="mb-3">

//               <label
//                 htmlFor="fullName"
//                 className="form-label"
//               >
//                 Full Name
//               </label>

//               <div className="auth-input-wrapper">
//                 <i className="bi bi-person auth-input-icon"></i>

//                 <input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   className={`form-control auth-input ${
//                     errors.fullName ? "is-invalid" : ""
//                   }`}
//                   placeholder="Enter your full name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                 />
//               </div>

//               {errors.fullName && (
//                 <div className="invalid-feedback d-block">
//                   {errors.fullName}
//                 </div>
//               )}

//             </div>

//             {/* Email */}
//             <div className="mb-3">

//               <label
//                 htmlFor="email"
//                 className="form-label"
//               >
//                 Email Address
//               </label>

//               <div className="auth-input-wrapper">
//                 <i className="bi bi-envelope auth-input-icon"></i>

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   className={`form-control auth-input ${
//                     errors.email ? "is-invalid" : ""
//                   }`}
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               {errors.email && (
//                 <div className="invalid-feedback d-block">
//                   {errors.email}
//                 </div>
//               )}

//             </div>

//             {/* Password */}
//             <div className="mb-3">

//               <label
//                 htmlFor="password"
//                 className="form-label"
//               >
//                 Password
//               </label>

//               <div className="auth-input-wrapper">

//                 <i className="bi bi-lock auth-input-icon"></i>

//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   className={`form-control auth-input auth-input-with-action ${
//                     errors.password ? "is-invalid" : ""
//                   }`}
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="button"
//                   className="password-toggle"
//                   onClick={() =>
//                     setShowPassword((previous) => !previous)
//                   }
//                   aria-label={
//                     showPassword
//                       ? "Hide password"
//                       : "Show password"
//                   }
//                 >
//                   <i
//                     className={`bi ${
//                       showPassword
//                         ? "bi-eye-slash"
//                         : "bi-eye"
//                     }`}
//                   ></i>
//                 </button>

//               </div>

//               {errors.password && (
//                 <div className="invalid-feedback d-block">
//                   {errors.password}
//                 </div>
//               )}

//             </div>

//             {/* Confirm Password */}
//             <div className="mb-4">

//               <label
//                 htmlFor="confirmPassword"
//                 className="form-label"
//               >
//                 Confirm Password
//               </label>

//               <div className="auth-input-wrapper">

//                 <i className="bi bi-shield-lock auth-input-icon"></i>

//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={
//                     showConfirmPassword
//                       ? "text"
//                       : "password"
//                   }
//                   className={`form-control auth-input auth-input-with-action ${
//                     errors.confirmPassword ? "is-invalid" : ""
//                   }`}
//                   placeholder="Re-enter your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="button"
//                   className="password-toggle"
//                   onClick={() =>
//                     setShowConfirmPassword(
//                       (previous) => !previous
//                     )
//                   }
//                   aria-label={
//                     showConfirmPassword
//                       ? "Hide confirm password"
//                       : "Show confirm password"
//                   }
//                 >
//                   <i
//                     className={`bi ${
//                       showConfirmPassword
//                         ? "bi-eye-slash"
//                         : "bi-eye"
//                     }`}
//                   ></i>
//                 </button>

//               </div>

//               {errors.confirmPassword && (
//                 <div className="invalid-feedback d-block">
//                   {errors.confirmPassword}
//                 </div>
//               )}

//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="btn btn-brand auth-submit w-100"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <span
//                     className="spinner-border spinner-border-sm me-2"
//                     role="status"
//                     aria-hidden="true"
//                   ></span>

//                   Creating Account...
//                 </>
//               ) : (
//                 <>
//                   Create Account
//                   <i className="bi bi-arrow-right ms-2"></i>
//                 </>
//               )}
//             </button>

//           </form>

//           {/* Login */}
//           <div className="auth-footer">
//             <span>
//               Already have an account?
//             </span>

//             <Link to="/login">
//               Login
//             </Link>
//           </div>

//         </section>

//         {/* Small footer */}
//         <p className="auth-bottom-text">
//           Secure document intelligence platform
//         </p>

//       </div>

//     </main>
//   );
// }

// export default Register;


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
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
      Temporary frontend-only registration.

      Later this will become:

      authService.register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
    */

    setTimeout(() => {
      const registeredUser = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
      };

      localStorage.setItem(
        "registeredUser",
        JSON.stringify(registeredUser)
      );

      setIsSubmitting(false);

      setSuccessMessage(
        "Account created successfully. Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1200);
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

        {/* Register Card */}
        <section className="auth-card">

          <div className="auth-header">
            <span className="auth-label">
              CREATE ACCOUNT
            </span>

            <h1>
              Get started with
              <span className="text-brand">
                {" "}Semantic Search
              </span>
            </h1>

            <p>
              Create your account to securely manage, search,
              summarize, and interact with your PDF documents.
            </p>
          </div>

          {/* Success Message */}
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

            {/* Full Name */}
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="form-label"
              >
                Full Name
              </label>

              <div className="auth-input-wrapper">
                <i className="bi bi-person auth-input-icon"></i>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`form-control auth-input ${
                    errors.fullName
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              {errors.fullName && (
                <div className="invalid-feedback d-block">
                  {errors.fullName}
                </div>
              )}
            </div>

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
                    errors.email
                      ? "is-invalid"
                      : ""
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
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className={`form-control auth-input auth-input-with-action ${
                    errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
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

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="form-label"
              >
                Confirm Password
              </label>

              <div className="auth-input-wrapper">
                <i className="bi bi-shield-lock auth-input-icon"></i>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  className={`form-control auth-input auth-input-with-action ${
                    errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  <i
                    className={`bi ${
                      showConfirmPassword
                        ? "bi-eye-slash"
                        : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>

              {errors.confirmPassword && (
                <div className="invalid-feedback d-block">
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            {/* Submit */}
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

                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <i className="bi bi-arrow-right ms-2"></i>
                </>
              )}
            </button>
          </form>

          {/* Login */}
          <div className="auth-footer">
            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Login
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

export default Register;