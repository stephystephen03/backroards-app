import React from "react";

const Tour = (trip) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={trip.img} className="tour-img" alt="" />
        <p className="tour-date">{trip.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{trip.title}</h4>
        </div>
        <p>{trip.text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {trip.place}
          </p>
          <p>{trip.days}</p>
          <p>{trip.rate}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
