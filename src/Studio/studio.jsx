import React from "react";

const Studio = () => {
  return (
    <div className="carousel slide" id="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://blog.myntra.com/wp-content/uploads/2020/04/Myntra-studio_Facebook.jpg"
            alt="home&living"
            className="d-block w-100 car-img"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://in.apparelresources.com/wp-content/uploads/sites/3/2020/04/Myntra-Studio.jpg"
            alt="home&living"
            className="d-block w-100 car-img"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Studio;
