import "./About.css";
import { cardData } from "../utils/data.js";

function About() {
  return (
    <section className="section-container" id="about">
      <div className="bg-card about-card">
        <h1 className="header">About us</h1>
        <div className="grid-display">
          {cardData.map((item, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="grouping-1">
                  <div className="circle">
                    <img className="card-logo" src={item.logo} alt="" />
                  </div>
                  <h2>{item.motto}</h2>
                </div>
                <div className="desc-box">
                  {item.description.map((desc, idx) => {
                    return <p key={idx}>{desc}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
