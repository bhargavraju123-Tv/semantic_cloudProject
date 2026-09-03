import React from "react";

function ProfileHeader({ user }) {
  const name = user?.name || "Bhargav";
  const email = user?.email || "bhargav@example.com";

  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-header-card">
      <div className="profile-avatar">
        {initials}
      </div>

      <div className="profile-header-info">
        <span className="profile-eyebrow">
          Account
        </span>

        <h2>{name}</h2>

        <p>{email}</p>

        <div className="profile-account-status">
          <span className="profile-status-dot"></span>
          Account active
        </div>
      </div>

      <div className="profile-header-badge">
        <i className="bi bi-shield-check me-2"></i>
        Secure Account
      </div>
    </div>
  );
}

export default ProfileHeader;