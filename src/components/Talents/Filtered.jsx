import React from "react";

function Filtered({ data, setPerson }) {
  // Finds a specific selection.
  function lookFor(e) {
    const { id } = e.target;
    setPerson(
      data.find((foundData) => {
        const { first } = foundData.name;
        return first === id;
      })
    );
  }

  return (
    <div className="internal-container">
      {data.map((person, idx) => {
        const {
          name: { first, last },
          field,
          status,
        } = person;
        return (
          <section className="talent-container" key={idx}>
            <div className="talent-img-container">
              <img src={person.picture.medium} alt="avatar" />
            </div>
            <div className="narrative">
              <p className="card-item">{`${first} ${last}`}</p>
              <p className="card-item">{field}</p>
              <p className="card-item">{status}</p>
            </div>
            <button
              id={person.name.first}
              className="view-profile"
              onClick={lookFor}
            >
              View Profile
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default Filtered;
