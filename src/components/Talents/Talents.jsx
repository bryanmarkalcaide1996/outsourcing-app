import "./Talent.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetData from "../utils/useGetData.js";
import Filtered from "./Filtered";

function Talents() {
  const [data] = useState(useGetData("jobseekers", "arr"));
  const [person, setPerson] = useState({});
  const navigate = useNavigate();

  const virtAsst = data.filter((data) => data.field === "Virtual Assistant");
  const frntEnd = data.filter((data) => data.field === "Front-end Developer");
  const bckEnd = data.filter((data) => data.field === "Back-end Developer");

  //  Redirect to individual profile when changes in dependencies detected.
  useEffect(() => {
    !JSON.parse(localStorage.getItem("isLoggedIn")) && navigate("/login");
    if (Object.keys(person).length > 0) {
      localStorage.setItem("jobseeker", JSON.stringify(person));
      navigate("/jobseeker");
    }
  }, [navigate, person]);

  return (
    <article className="talent-pool">
      <div className="table-container">
        <Filtered data={virtAsst} setPerson={setPerson} />
        <Filtered data={frntEnd} setPerson={setPerson} />
        <Filtered data={bckEnd} setPerson={setPerson} />
      </div>
    </article>
  );
}

export default Talents;
