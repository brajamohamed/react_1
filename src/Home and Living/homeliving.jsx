import React from "react";
import "../Hero/hero.css";
const Homeliving = () => {
  return (
    <div className="carousel slide" id="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://hmifurniture.in/wp-content/uploads/2021/10/Bed-7.jpg"
            alt="home&living"
            className="d-block w-100 car-img img-fluid"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-123788,resizemode-75,msid-99766937/top-trending-products/furniture/beds/best-king-size-beds-get-a-good-nights-sleep-and-enjoy-luxury-comfort.jpg"
            alt="home&living"
            className="d-block w-100 car-img img-fluid"
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

export default Homeliving;
