import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigationItems = [
    {
      label: "Overview",
      path: "/dashboard",
      icon: "bi-grid-1x2",
    },
    {
      label: "Documents",
      path: "/documents",
      icon: "bi-folder2-open",
    },
    {
      label: "Search",
      path: "/search",
      icon: "bi-search",
    },
    {
      label: "Summaries",
      path: "/documents",
      icon: "bi-stars",
    },
    {
      label: "Chat with PDF",
      path: "/documents",
      icon: "bi-chat-square-text",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand-wrapper">
        <Link to="/" className="sidebar-brand">
          <span className="sidebar-brand-icon">
            <i className="bi bi-search"></i>
          </span>

          <span>Semantic Search</span>
        </Link>
      </div>

      <div className="sidebar-section-label">
        WORKSPACE
      </div>

      <nav className="sidebar-navigation">
        {navigationItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-spacer"></div>

      <div className="sidebar-bottom">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </NavLink>

        <button
          type="button"
          className="sidebar-link sidebar-logout-button"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </button>

        <div className="sidebar-footer">
          <div className="sidebar-footer-icon">
            <i className="bi bi-shield-check"></i>
          </div>

          <div>
            <small>Secure Workspace</small>
            <span>PDF documents</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;