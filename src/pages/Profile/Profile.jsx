import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import SecurityCard from "../../components/profile/SecurityCard";

function Profile() {
  const { user } = useAuth();

  const currentUser = {
    name: user?.name || "User",
    email: user?.email || "Not available",
  };

  return (
    <div className="profile-page">
      <div className="profile-page-container">

        <div className="profile-breadcrumb">
          <Link to="/dashboard">
            Dashboard
          </Link>

          <i className="bi bi-chevron-right"></i>

          <span>
            Profile
          </span>
        </div>

        <div className="profile-page-title">
          <div>
            <span>
              ACCOUNT SETTINGS
            </span>

            <h1>
              Profile & Settings
            </h1>

            <p>
              Manage your personal information and account security.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="profile-dashboard-button"
          >
            <i className="bi bi-grid me-2"></i>
            Dashboard
          </Link>
        </div>

        <ProfileHeader user={currentUser} />

        <div className="profile-content-grid">
          <div className="profile-main-column">
            <ProfileInfo user={currentUser} />

            <SecurityCard />
          </div>

          <aside className="profile-side-column">

            <div className="profile-side-card">
              <div className="profile-side-icon">
                <i className="bi bi-cloud-check"></i>
              </div>

              <h5>
                Document Workspace
              </h5>

              <p>
                Your documents, search history, summaries and
                conversations will remain connected to your account.
              </p>

              <Link to="/documents">
                Manage Documents
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="profile-side-card profile-side-card-light">
              <div className="profile-side-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h5>
                AI Features
              </h5>

              <p>
                Use semantic search, AI summaries and Chat with PDF
                to work with your documents.
              </p>

              <Link to="/search">
                Open Semantic Search
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

export default Profile;