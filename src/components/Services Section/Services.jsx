import "./Services.css";
import { servicesData } from "../utils/data.js";

function Services() {
  return (
    <section className="section-container" id="services">
      <div className="bg-card section-card">
        <h1 className="header">Services</h1>
        <div className="grid-display">
          {servicesData.map((item) => {
            return (
              <div className="card">
                <div className="img-frame">
                  <img className="images" src={item.img} alt="" />
                </div>
                <div className="description">
                  <h2>{item.title}</h2>
                  <div>{item.desc}</div>
                </div>
                <button className="services-btn">Learn more</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
