import React from "react";
import useGetData from "../utils/useGetData";

function Homepage({ setToken }) {
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
