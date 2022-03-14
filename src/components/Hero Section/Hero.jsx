import React from "react";
import "./Hero.css";
import homepage from "../../Assets/homepage.jpg";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="left-content">
        <h1>Optimizing Your Business Website Page. Starts Here!</h1>
        <p>The Phenomenal Innovator</p>
        <a href="#services">
          <button> Find Out More</button>
        </a>
      </div>

      <figure className="right-content">
        <img className="hero-image" src={homepage} alt="homepage" />
      </figure>
    </section>
  );
}

export default Hero;
