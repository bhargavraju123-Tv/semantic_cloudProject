import React from "react";
import { Link } from "react-router-dom";

function SecurityCard() {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div>
          <span className="profile-card-eyebrow">
            Account protection
          </span>

          <h4>Security</h4>

          <p>
            Manage your password and account security options.
          </p>
        </div>
      </div>

      <div className="security-option">
        <div className="security-option-icon blue">
          <i className="bi bi-key"></i>
        </div>

        <div className="security-option-content">
          <h6>Password</h6>

          <p>
            Keep your account protected with a strong password.
          </p>
        </div>

        <button
          type="button"
          className="security-action-button"
        >
          Change Password
        </button>
      </div>

      <div className="security-option">
        <div className="security-option-icon orange">
          <i className="bi bi-envelope-check"></i>
        </div>

        <div className="security-option-content">
          <h6>Password Recovery</h6>

          <p>
            Use password recovery when you cannot access your account.
          </p>
        </div>

        <Link
          to="/forgot-password"
          className="security-action-button"
        >
          Reset Password
        </Link>
      </div>

      <div className="security-notice">
        <i className="bi bi-info-circle"></i>

        <span>
          Security actions will be connected to the Spring Boot
          authentication APIs during backend integration.
        </span>
      </div>
    </div>
  );
}

export default SecurityCard;