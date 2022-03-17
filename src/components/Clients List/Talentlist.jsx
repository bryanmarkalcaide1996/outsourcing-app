import React from "react";
import "./Talentlist.css";

function Talentlist() {
  const bucketList = JSON.parse(localStorage.getItem("currentUser")).clientList;
  return (
    <section className="tl-widget">
      <div className="tl-wrapper">
        <div className="bucket-container">
          <div className="category-header"></div>
          {bucketList.map((listItem) => {
            const {
              field,
              name: { first, last },
              picture: { large },
              login: { uuid: id },
            } = listItem;
            return (
              <div key={id} className="tl-card btn-secondary" draggable="true">
                <div className="frame">
                  <img
                    className="tl-img"
                    src={large}
                    alt={`${first} ${last}`}
                  />
                </div>
                <div className="tl-description">
                  <h4>{`${first} ${last}`}</h4>
                  <h5>{field}</h5>
                </div>
                <div className="tl-description">
                  <h6>Rate: 12$ / hr</h6>
                  <h6>Availability: 40hrs / week</h6>
                </div>
                <div className="btn-container">
                  <button className=" btn btn-dark">Send Contract</button>
                  <button className=" btn btn-light">Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Talentlist;
