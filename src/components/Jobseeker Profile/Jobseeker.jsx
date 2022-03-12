import React from "react";
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
      <div className="jobseeker-container">
        <div className="avatar-container">
          <img
            className="avatar"
            src={person.picture.large}
            alt={person.name.first}
          />
        </div>
        <h1>{`${first} ${last}`}</h1>
        <h2>{field}</h2>

        <p>{email}</p>
        <p>{`${number} ${name}, ${state}, ${country}`}</p>
        <p>{cell}</p>
      </div>
    </>
  );
}

export default Jobseeker;
