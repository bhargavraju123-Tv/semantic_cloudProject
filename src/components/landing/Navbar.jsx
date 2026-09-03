// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
// //       <div className="container">

// //         <Link
// //           to="/"
// //           className="navbar-brand fw-bold text-brand d-flex align-items-center"
// //         >
// //           <i className="bi bi-search me-2"></i>
// //           Semantic Search
// //         </Link>

// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#mainNavbar"
// //           aria-controls="mainNavbar"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="mainNavbar">

// //           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

// //             <li className="nav-item">
// //               <Link className="nav-link active" to="/">
// //                 Home
// //               </Link>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link" href="#about">
// //                 About
// //               </a>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link" href="#features">
// //                 Features
// //               </a>
// //             </li>

// //             <li className="nav-item">
// //               <a className="nav-link" href="#how-it-works">
// //                 How It Works
// //               </a>
// //             </li>

// //           </ul>

// //           <div className="d-flex align-items-center gap-2">

// //             <Link
// //               to="/login"
// //               className="btn btn-outline-primary"
// //             >
// //               Login
// //             </Link>

// //             <Link
// //               to="/register"
// //               className="btn btn-brand"
// //             >
// //               Get Started
// //             </Link>

// //           </div>

// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
//       <div className="container">

//         {/* Brand */}
//         <Link
//           to="/"
//           className="navbar-brand fw-bold text-brand d-flex align-items-center"
//           aria-label="Semantic Search Home"
//         >
//           <i className="bi bi-search me-2"></i>
//           Semantic Search
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//           aria-controls="mainNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation */}
//         <div
//           className="collapse navbar-collapse"
//           id="mainNavbar"
//         >
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

//             <li className="nav-item">
//               <Link
//                 className="nav-link active"
//                 to="/"
//               >
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#about"
//                 data-bs-toggle="collapse"
//                 data-bs-target=".navbar-collapse.show"
//               >
//                 About
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#features"
//                 data-bs-toggle="collapse"
//                 data-bs-target=".navbar-collapse.show"
//               >
//                 Features
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 href="#how-it-works"
//                 data-bs-toggle="collapse"
//                 data-bs-target=".navbar-collapse.show"
//               >
//                 How It Works
//               </a>
//             </li>

//           </ul>

//           {/* Auth Actions */}
//           <div className="d-flex align-items-center gap-2">

//             <Link
//               to="/login"
//               className="btn btn-outline-primary"
//             >
//               Login
//             </Link>

//             <Link
//               to="/register"
//               className="btn btn-brand"
//             >
//               Get Started
//             </Link>

//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbar = document.querySelector(".navbar");

    const navbarHeight = navbar
      ? navbar.getBoundingClientRect().height
      : 0;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">

        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand fw-bold text-brand d-flex align-items-center"
        >
          <i className="bi bi-search me-2"></i>
          Semantic Search
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link nav-scroll-button"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link nav-scroll-button"
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link nav-scroll-button"
                onClick={() =>
                  scrollToSection("how-it-works")
                }
              >
                How It Works
              </button>
            </li>

          </ul>

          {/* Auth Actions */}
          <div className="d-flex align-items-center gap-2">
            <Link
              to="/login"
              className="btn btn-outline-primary"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-brand"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;