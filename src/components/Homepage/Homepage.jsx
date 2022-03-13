import "./Homepage.css";
import homepage from "../../Assets/homepage.jpg"

function Homepage({ setToken }) {
  return (
    <div className="container">
      <section className="left-part">
        <div className="content">
         <h1>Optimizing Your Business Website Page. Starts Here!</h1>
          <h4>The Phenominal Innovator</h4>
          <a href="/services">
          <button> Find Out More</button>
          </a>
          <a href="/login">
          <button> Log In</button>
          </a>
        </div>
      </section>
      <section className="right-part">
         <img src={homepage} alt="homepage"/>
      </section>
      </div>
  );
}

export default Homepage;
