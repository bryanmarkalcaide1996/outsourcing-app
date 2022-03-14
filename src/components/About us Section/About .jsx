import "./About.css";
import { cardData } from "../utils/data.js";

function About() {
  return (
    <section className="about-section">
      <div className="bg-card">
        <h1 className="about">About us</h1>
        {cardData.map((item) => {
          return (
            <div className="card">
              <div className="grouping-1">
                <div className="circle">
                  <img className="card-logo" src={item.logo} alt="" />
                </div>
                <h2>{item.motto}</h2>
              </div>
              {item.description.map((desc) => {
                return <p>{desc}</p>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
