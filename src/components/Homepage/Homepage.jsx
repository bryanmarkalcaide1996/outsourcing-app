import "./Homepage.css";
import Hero from "../Hero Section/Hero";
import Services from "../Services Section/Services";
import About from "../About us Section/About ";
import ContactUs from "../Contact Us Section/ContactUs";

function Homepage() {
  return (
    <article className="home">
      <a href="#home">
        <div className="btt">Top</div>
      </a>
      <Hero />
      <Services />
      <About />
      <ContactUs />
    </article>
  );
}

export default Homepage;
