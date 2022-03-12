import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage({ setToken }) {
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
