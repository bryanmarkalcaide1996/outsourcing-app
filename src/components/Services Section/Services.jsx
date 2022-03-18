import "./Services.css";
import { servicesArticle, servicesData } from "../utils/data.js";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  function handleClick(e) {
    const { id } = e.target;
    console.log(id);
    const article = servicesArticle.find((current) => current.header === id);
    sessionStorage.setItem("currentArticle", JSON.stringify(article));
    setTimeout(() => {
      navigate("/article");
    }, 1000);
  }

  return (
    <section className="section-container" id="services">
      <div className="bg-card section-card">
        <h1 className="header">Services</h1>
        <div className="grid-display">
          {servicesData.map((item, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="img-frame">
                  <img className="images" src={item.img} alt="" />
                </div>
                <div className="description">
                  <h3>{item.title}</h3>
                  <div>{item.desc}</div>
                </div>
                <button
                  className="services-btn"
                  id={item.title}
                  onClick={handleClick}
                >
                  Learn more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
