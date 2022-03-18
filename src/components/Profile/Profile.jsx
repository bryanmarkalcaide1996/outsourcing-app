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
      <div className="first-section">
        <img src="" alt="" />
        <p>Client ID: asdfasdfasdf</p>
        <h1>Edit Profile</h1>
      </div>
      <div className="second-section">
        <div className="buttons">
         <button>Inbox</button>
          <button>Hired Talents</button>
          <button>Talent List</button>
        </div>
        <div className="box-content">
              Empty Box
        </div>
      </div>

    </article>
  );
}

export default Profile;
