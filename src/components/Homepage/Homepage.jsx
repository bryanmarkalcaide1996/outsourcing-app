import "./Homepage.css";
import Hero from "../Hero Section/Hero";
import Services from "../Services Section/Services";
import About from "../About us Section/About ";

function Homepage() {
  return (
    <article className="homepage">
      <a href="#hero">
        <div className="btt">Top</div>
      </a>
      <Hero />
      <Services />
      <About />
    </article>
  );
}

export default Homepage;
