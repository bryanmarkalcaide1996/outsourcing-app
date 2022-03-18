import "./Pricing.css";
import { pricing } from "../utils/data.js";

const Pricing = () => {
  return (
    <section className="section-container">
      <div className="bg-card pricing-card">
        <h1 className="header">Pricing</h1>
        <div className="grid-display">
          {pricing.map((item, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="pricing-wrapper">
                  <h3>{item.title}</h3>
                  <div className="pricing-img-container">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="description">
                    <ul className="product-list">
                      {item.package.map((pack) => {
                        return <li>{pack}</li>;
                      })}
                    </ul>
                    <h5>{item.price}</h5>
                  </div>

                  <button className="services-btn">Choose Plan</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
