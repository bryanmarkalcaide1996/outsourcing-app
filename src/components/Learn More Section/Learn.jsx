import { useNavigate } from "react-router-dom";
import "./Learn.css";
function Learn() {
  const navigate = useNavigate();
  const { header, desc, sub, tasks, image } = JSON.parse(
    sessionStorage.getItem("currentArticle")
  );
  return (
    <article className="service-article">
      <div className="article-wrapper">
        <div className="article-image-frame">
          <img src={image} alt={header} className="article-image" />
        </div>
        <section className="introduction">
          <h1 className="heading">{header}</h1>
          <p>{desc}</p>
        </section>
        <section className="mission">
          <h2>{sub}</h2>
          <ul>
            {tasks.map((listItem, idx) => {
              return (
                <li className="listItem" key={idx}>
                  {listItem}
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </section>
      </div>
    </article>
  );
}

export default Learn;
