<<<<<<< HEAD
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage({ setToken }) {
=======
import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";


function Homepage({ setToken }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=5000";
    fetch(url)
      .then((response) => response.json())
      .then((json) =>
        setData((prevState) => {
          console.log(json);
          return [...prevState, json];

        })

      );
  }, []);
  

  console.log(data);

>>>>>>> 14cc6cf7d190d5eb1de05376a74ba91d4e489703
  return (
    <div className="homepage">
      <h1>HOMEPAGE</h1>
<<<<<<< HEAD
=======
      <Profile/>
>>>>>>> 14cc6cf7d190d5eb1de05376a74ba91d4e489703

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
