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
    </div>
  );
}

export default Homepage;
