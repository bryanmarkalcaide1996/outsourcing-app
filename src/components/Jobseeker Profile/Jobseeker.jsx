import "./Jobseeker.css";
import React, { useEffect, useState } from "react";
import badge from "../../Assets/verified.png";
import contact from "../../Assets/phone.png";
import address from "../../Assets/location.png";
import mail from "../../Assets/email.png";
import { useNavigate } from "react-router-dom";
import useSendToList from "../utils/useSendToList";

function Jobseeker() {
  // Fetches the data from the database for rendering purposes
  const person = JSON.parse(localStorage.getItem("jobseeker"));
  const [err, setErr] = useState({ style: "", status: false });
  const navigate = useNavigate();
  useEffect(() => {
    !JSON.parse(localStorage.getItem("currentUser")).isAuthenticated &&
      navigate("/login");
  });

  const {
    cell,
    email,
    field,
    name: { first, last },
    location: {
      country,
      state,
      street: { number, name },
    },
    services,
  } = person;

  function usePushToList(e) {
    const { id } = e.target;
    useSendToList(id, person, setErr);
    setTimeout(() => {
      navigate("/talents");
    }, 1000);
  }

  return (
    <article className="jobseeker-container">
      <div className="profile-container">
        <div className="color-theme">
          <figure className="avatar-container">
            <img
              className="avatar"
              src={person.picture.large}
              alt={person.name.first}
            />
          </figure>

          <div className="name-field">
            <h1>{`${first} ${last}`}</h1>
            <p className="field-text">{field}</p>
            <div className="badge">
              <img src={badge} alt="approve seal" className="badge-logo" />
              <p>Verified</p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="left-box">
            <figure className="directories">
              <div>
                <img className="directory-image" src={mail} alt="email" />
              </div>
              <a href={`mailto:${email}`}> {email}</a>
            </figure>

            <figure className="directories">
              <div>
                <img className="directory-image" src={address} alt="address" />
              </div>
              {`${number} ${name}, ${state}, ${country}`}
            </figure>

            <figure className="directories">
              <div>
                <img className="directory-image" src={contact} alt="phone" />
              </div>
              {cell}
            </figure>

            <button className="cta-button main-cta">Send Message</button>
            <button
              className={`cta-button ${err.style}`}
              id={person.login.uuid}
              onClick={usePushToList}
            >
              {err.status
                ? "Already added"
                : err.style
                ? "Successfully Added"
                : "Add to Queue"}
            </button>
          </div>

          <div className="right-box">
            <section className="description">
              <h4>Rate: 12$ / hr</h4>
              <h4>Availability: 40hrs / week</h4>
              <h4>Services Offered</h4>
              {Object.keys(services).length > 0 && (
                <ul className="list-container">
                  {Object.keys(services).map((item, i) => {
                    return <li key={i}>{services[item]}</li>;
                  })}
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Jobseeker;
