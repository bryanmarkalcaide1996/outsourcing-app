import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    !JSON.parse(localStorage.getItem("isLoggedIn")) && navigate("/login");
  });

  return (
    <div>
      <h1>This is your profile</h1>
    </div>
  );
}

export default Profile;
