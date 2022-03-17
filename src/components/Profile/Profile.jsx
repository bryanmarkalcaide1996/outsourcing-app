import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    !JSON.parse(localStorage.getItem("isLoggedIn")) && navigate("/login");
  });

  return (
    <article className="profile-section">
      <h1>This is your profile</h1>
    </article>
  );
}

export default Profile;
