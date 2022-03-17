import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("currentUser")).isAuthenticated;

  useEffect(() => {
    !token && navigate("/login");
  });

  return (
    <article className="profile-section">
      <h1>This is your profile</h1>
    </article>
  );
}

export default Profile;
