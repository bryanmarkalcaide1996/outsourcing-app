import "./Services.css";
import { servicesData } from "../utils/data.js";

function Services() {
  return (
    <section className="services-section" id="services">
      <h1 className="header">Services</h1>
      <div className="cardContainer">
        {servicesData.map((item) => {
            return (
              <div className="card">
                  <div>
                    <img className="images" src={item.img} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <div>{item.desc}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Services;
