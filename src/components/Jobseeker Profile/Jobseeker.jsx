import React from "react";
import badge from "../../Assets/verified.png";
import "./Jobseeker.css";

function Jobseeker({ person, setFlag }) {
  const {
    field,
    name: { first, last },
    location: {
      country,
      state,
      street: { number, name },
    },
    email,
    cell,
  } = person;
  console.log(person);
  return (
    <>
      <article className="jobseeker-container">
        <div className="profile-container">
          <div className="color-theme">
            <div className="name-field">
              <h1>{`${first} ${last}`}</h1>
              <h2>{field}</h2>
              <div className="badge">
                <img src={badge} alt="approve seal" />
                <h3>Verified</h3>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="basic-info">
              <div className="avatar-container">
                <img
                  className="avatar"
                  src={person.picture.large}
                  alt={person.name.first}
                />
              </div>
            </div>

            <div className="profile-info">
              <div className="left-box">
                <div className="contact-info">
                  <p>{email}</p>
                  <p>{`${number} ${name}, ${state}, ${country}`}</p>
                  <p>{cell}</p>
                </div>
              </div>
              <div className="right-box"></div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Jobseeker;
