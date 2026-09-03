function StatCard({
  icon,
  label,
  value,
  description,
  iconClass = "",
}) {
  return (
    <div className="stat-card h-100">

      <div className="stat-card-top">
        <div className={`stat-card-icon ${iconClass}`}>
          <i className={`bi ${icon}`}></i>
        </div>

        <i className="bi bi-three-dots stat-card-menu"></i>
      </div>

      <div className="stat-card-value">
        {value}
      </div>

      <div className="stat-card-label">
        {label}
      </div>

      <div className="stat-card-description">
        {description}
      </div>

    </div>
  );
}

export default StatCard;