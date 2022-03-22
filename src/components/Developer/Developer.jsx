import "../Developer/Developer.css";
import { meetTheTeam } from "../utils/data.js";

function Developer(props) {
  return (
    <section className="section-container">
      <h1 className="team">Meet our Team</h1>
      <div className="grid-display">
        {meetTheTeam.map((dev, idx) => {
          const { name, narrative, image, link } = dev;
          return (
            <div className="card dev" key={idx}>
              <div className="heading-tab">
                <div className="circles "></div>
                <div className="circles "></div>
                <div className="circles "></div>
              </div>
              <div className="image-container">
                <img className="avatar" src={image} alt={name} />
              </div>

              <div className="narrative">
                <h3>Hey! I'm {name}</h3>
                <p className="description">{narrative}</p>
              </div>
              <a
                href={link}
                className="btn btn-lg btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Developer;
