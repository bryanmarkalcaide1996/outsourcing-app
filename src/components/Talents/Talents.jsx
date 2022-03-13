import "./Talent.css";
import React, { useState } from "react";
import useGetData from "../utils/useGetData.js";
import Jobseeker from "../Jobseeker Profile/Jobseeker.jsx";

function Talents() {
  const [data, setData] = useState(useGetData("jobseekers", "arr"));
  const [flag, setFlag] = useState(false);
  const [person, setPerson] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  function filter(e) {
    const { value } = e.target;
    if (value === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(() => {
        return data.filter((fData) => {
          return fData.field === value;
        });
      });
    }
  }

  function lookFor(e) {
    const { id } = e.target;
    setPerson(
      data.find((foundData) => {
        const { first } = foundData.name;
        return first === id;
      })
    );
    setFlag(true);
  }

  return (
    <>
      {!flag ? (
        <div>
          <button onClick={filter} value="All">
            All
          </button>
          <button onClick={filter} value="Virtual Assistant">
            Virtual Assistant
          </button>
          <button onClick={filter} value="Full-stack Developer">
            Full-stack Developers
          </button>
          <button onClick={filter} value="Front-end Developer">
            Front-end Developers
          </button>
          <button onClick={filter} value="Back-end Developer">
            Back-end Developers
          </button>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Image</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Field</th>
              </tr>
            </thead>

            {filteredData.map((person, idx) => {
              const { title, first, last } = person.name;
              return (
                <tbody key={idx}>
                  <tr>
                    <td
                      onClick={lookFor}
                      id={first}
                      className="name-link"
                    >{`${title} ${first} ${last}`}</td>
                    <td>
                      <img
                        src={person.picture.medium}
                        alt="avatar"
                        className="img"
                      />
                    </td>
                    <td>{person.gender}</td>
                    <td>{person.cell}</td>
                    <th>{person.field}</th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      ) : (
        <Jobseeker setFlag={setFlag} person={person} />
      )}
    </>
  );
}

export default Talents;
