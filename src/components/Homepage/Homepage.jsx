import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <button
        onClick={() => {
          setToken(false);
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Homepage;
