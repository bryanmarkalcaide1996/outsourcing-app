import Navigation from "../Navigation/Navigation";
import "./Homepage.css";
import { useState } from "react";

function Homepage({ setToken }) {
  const [data, setData] = useState([]);

  return (
    <div className="homepage">
      <h1>HOMEPAGE</h1>

      <button
        onClick={() => {
          setToken(false);
        }}
      >
        LOGOUT
      </button>
      <Navigation id={"footer"} />
    </div>
  );
}

export default Homepage;
