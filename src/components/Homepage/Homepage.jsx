import React from "react";

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
