import React from "react";
import Yunis from "../../Assets/yunis.png";
import Bry from "../../Assets/Bryan.png";
import Mack from "../../Assets/Mack.png";
import "../Developer/Developer.css";

function Developer(props) {
  return (
    <div className="container-dev">
      <div className="yunis-section">
        <div className="profile-dev">
          <img src={Yunis} className="yunis" />
        </div>
        <div className="info-dev">
          <h2 className="yunis-name">Hey! I'm Eunice</h2>
          <p className="yunis-info">
            I'm a Full-stack Developer. My work background is more on developing
            both client and server software.
          </p>
          <a href="https://eunice-webpage.herokuapp.com/">
            <button className="yunis-btn">Learn More About Me!</button>
          </a>
        </div>
      </div>
      <div className="yunis-section">
        <div className="info-dev">
          <h2 className="yunis-name">Hey! I'm Bryan</h2>
          <p className="yunis-info">
            I'm a Full-stack Developer. My work background is more on developing
            both client and server software.
          </p>
          <a href="https://fast-harbor-74924.herokuapp.com/">
            <button className="yunis-btn">Learn More About Me!</button>
          </a>
        </div>
        <div className="profile-dev">
          <img src={Bry} className="bry" />
        </div>
      </div>
      <div className="yunis-section">
        <div className="profile-dev">
          <img src={Mack} className="yunis" />
        </div>
        <div className="info-dev">
          <h2 className="yunis-name">Hey! Mackinley</h2>
          <p className="yunis-info">
            I'm a Full-stack Developer. My work background is more on developing
            both client and server software.
          </p>
          <a href="https://dry-reaches-99921.herokuapp.com/">
            <button className="yunis-btn">Learn More About Me!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Developer;
