import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DashboardTopbar() {
  const { user } = useAuth();

  const userName = user?.name || "User";

  const initials = userName
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="dashboard-topbar">
      <div>
        <span className="topbar-eyebrow">
          WORKSPACE
        </span>

        <h1>
          Dashboard
        </h1>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
        >
          <i className="bi bi-bell"></i>
        </button>

        <Link
          to="/profile"
          className="topbar-user"
        >
          <span className="topbar-avatar">
            {initials}
          </span>

          <span className="topbar-user-info">
            <strong>{userName}</strong>

            <small>
              Personal Workspace
            </small>
          </span>

          <i className="bi bi-chevron-down"></i>
        </Link>
      </div>
    </header>
  );
}

export default DashboardTopbar;