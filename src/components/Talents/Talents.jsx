import "./Talent.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../utils/useGetData.js";

function Talents() {
  const [data] = useState(useGetData("jobseekers", "arr"));
  const [person, setPerson] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  // Filters database according to category selected
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

  //  Redirect to individual profile when changes in dependencies detected.
  useEffect(() => {
    !JSON.parse(localStorage.getItem("isLoggedIn")) && navigate("/login");
    if (Object.keys(person).length > 0) {
      localStorage.setItem("jobseeker", JSON.stringify(person));
      navigate("/jobseeker");
    }
  }, [navigate, person]);

  return (
    <section className="talent-pool">
      <div className="table-container">
        {/* Sets of filter button for categorizing talent */}
        <div className="button-collection">
          <button onClick={filter} value="All" className="btn-talent">
            All
          </button>
          <button
            onClick={filter}
            value="Virtual Assistant"
            className="btn-talent"
          >
            Virtual Assistant
          </button>
          <button
            onClick={filter}
            value="Front-end Developer"
            className="btn-talent"
          >
            Front-end Developers
          </button>
          <button
            onClick={filter}
            value="Back-end Developer"
            className="btn-talents"
          >
            Back-end Developers
          </button>
        </div>
        <table className="table-talent">
          <thead>
            <tr>
              <th className="table-header">Full Name</th>
              <th className="table-header">Image</th>
              <th className="table-header">Gender</th>
              <th className="table-header">Contact</th>
              <th className="table-header">Field</th>
            </tr>
          </thead>

          {filteredData.map((person, idx) => {
            const { title, first, last } = person.name;
            return (
              <tbody key={idx}>
                <tr>
                  <td onClick={lookFor} id={first} className="name-link">
                    {`${title} ${first} ${last}`}
                  </td>
                  <td className="talent-td">
                    <img
                      src={person.picture.medium}
                      alt="avatar"
                      className="img"
                    />
                  </td>
                  <td className="talent-td">{person.gender}</td>
                  <td className="talent-td">{person.cell}</td>
                  <th className="talent-tds">{person.field}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default Talents;
