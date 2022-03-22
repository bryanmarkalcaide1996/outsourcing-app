import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import user from "../../Assets/user.png";

function Profile() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    !token.isAuthenticated && navigate("/login");
  });
  const [img, setImg] = useState("");
  const [imgsrc, setImgsrc] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setImg(e.target.files[0]);
  }

  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgsrc(reader.result);
      });
      reader.readAsDataURL(img);
    } else {
    }
  }, [img, token]);

  console.log(token);
  return (
    <article className="profile-section section-container">
      <div className="user-profile">
        <div className="greeting">
          <h3>Hello {token.firstName}</h3>
        </div>
        <div className="portion-container">
          <div className="left-portion">
            <div className="image-container">
              <div className="profile-pic">
                {img ? (
                  <img src={imgsrc} alt="" className="profile" />
                ) : (
                  <img src={user} alt="" className="profile" />
                )}
              </div>
              <p className="userId">User ID: {token.id}</p>
              <input
                id="upload"
                className="upload"
                type="file"
                accept="image/png image/jpg"
                onChange={handleChange}
              />
              <label htmlFor="upload" className="upload-label btn-dark btn">
                Upload
              </label>
            </div>
          </div>
          <div className="right-portion"></div>
        </div>
      </div>
    </article>
  );
}

export default Profile;
