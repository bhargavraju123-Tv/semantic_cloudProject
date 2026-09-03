import { Link } from "react-router-dom";

function QuickActionCard({
  icon,
  title,
  description,
  path,
  variant = "blue",
}) {
  return (
    <Link
      to={path}
      className="quick-action-card"
    >
      <div className={`quick-action-icon ${variant}`}>
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="quick-action-content">
        <h6>{title}</h6>

        <p>{description}</p>
      </div>

      <i className="bi bi-arrow-up-right quick-action-arrow"></i>
    </Link>
  );
}

export default QuickActionCard;