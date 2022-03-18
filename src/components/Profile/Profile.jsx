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
      <h1 className="your-prof">Your Profile</h1> 
      <div className="profile-container">
        <div className="first-section">
          <div className="img-profile"></div>
          <p>Client ID: asdfasdfasdf</p>
          <button className="btn btn-dark">Edit Profile</button>
        </div>
        <div className="second-section">
          <div className="buttons">
          <button className="btn btn-dark buttons-size">Inbox</button>
            <button className="btn btn-dark buttons-size" >Hired Talents</button>
            <button className="btn btn-dark buttons-size">Talent List</button>
          </div>
          <div className="box-content">
                Empty Box
          </div>
        </div>
      </div>
    </article>
  );
}

export default Profile;
