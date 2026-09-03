import React, { useState } from "react";

function ProfileInfo({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "Bhargav",
    email: user?.email || "bhargav@example.com",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div>
          <span className="profile-card-eyebrow">
            Personal details
          </span>

          <h4>Personal Information</h4>

          <p>
            Manage the basic information associated with your account.
          </p>
        </div>

        {!isEditing && (
          <button
            type="button"
            className="profile-edit-button"
            onClick={() => setIsEditing(true)}
          >
            <i className="bi bi-pencil me-2"></i>
            Edit Profile
          </button>
        )}
      </div>

      <form onSubmit={handleSave}>
        <div className="profile-form-grid">
          <div className="profile-form-group">
            <label htmlFor="profile-name">
              Full Name
            </label>

            <div className="profile-input-wrapper">
              <i className="bi bi-person"></i>

              <input
                id="profile-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="profile-form-group">
            <label htmlFor="profile-email">
              Email Address
            </label>

            <div className="profile-input-wrapper">
              <i className="bi bi-envelope"></i>

              <input
                id="profile-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="profile-form-actions">
            <button
              type="button"
              className="btn btn-light profile-cancel-button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary profile-save-button"
            >
              <i className="bi bi-check2 me-2"></i>
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProfileInfo;