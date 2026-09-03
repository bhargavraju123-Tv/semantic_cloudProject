function RecentActivity() {
  const activities = [
    {
      icon: "bi-cloud-arrow-up",
      title: "Document uploaded",
      description: "Machine Learning Research Paper.pdf",
      time: "10 minutes ago",
    },
    {
      icon: "bi-search",
      title: "Semantic search completed",
      description: "Query: machine learning algorithms",
      time: "35 minutes ago",
    },
    {
      icon: "bi-stars",
      title: "Summary generated",
      description: "Cloud Computing Notes.pdf",
      time: "1 hour ago",
    },
    {
      icon: "bi-chat-square-text",
      title: "PDF conversation started",
      description: "Spring Boot Architecture.pdf",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="dashboard-panel h-100">

      <div className="dashboard-panel-header">
        <div>
          <span className="panel-eyebrow">
            ACTIVITY
          </span>

          <h5>Recent Activity</h5>
        </div>
      </div>

      <div className="activity-list">

        {activities.map((activity, index) => (
          <div
            className="activity-item"
            key={index}
          >
            <div className="activity-icon">
              <i className={`bi ${activity.icon}`}></i>
            </div>

            <div className="activity-content">
              <h6>{activity.title}</h6>

              <p>{activity.description}</p>

              <small>{activity.time}</small>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;