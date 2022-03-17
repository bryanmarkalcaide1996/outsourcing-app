import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Talentlist.css";

function Talentlist() {
  const [bucketList, setBucketList] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const navigate = useNavigate();

  function deleteItem(e) {
    const { id } = e.target;
    setBucketList({
      ...bucketList,
      clientList: bucketList.clientList.filter(
        (item) => item.login.uuid !== id
      ),
    });
  }
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(bucketList));
  });
  return (
    <section className="tl-widget">
      {bucketList.clientList.length > 0 ? (
        <div className="tl-wrapper">
          <div className="bucket-container">
            {bucketList?.clientList.map((listItem) => {
              const {
                field,
                name: { first, last },
                picture: { large },
                login: { uuid: id },
              } = listItem;
              return (
                <div
                  key={id}
                  className="tl-card btn-secondary card-mini"
                  draggable="true"
                >
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
                    <p>Rate: 12$ / hr</p>
                    <p>Availability: 40hrs / week</p>
                  </div>
                  <div className="btn-container">
                    <button className=" mini-card-btn btn btn-dark">
                      Send Contract
                    </button>
                    <button
                      className=" mini-card-btn btn btn-light"
                      onClick={deleteItem}
                      id={id}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="callToAction">
          <button
            className="btn btn-dark btn-lg"
            onClick={() => {
              navigate("/talents");
            }}
          >
            Start hiring
          </button>
          <p>Your talent list is currently empty</p>
        </div>
      )}
    </section>
  );
}

export default Talentlist;
