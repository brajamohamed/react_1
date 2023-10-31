import React from "react";
import "../Hero/hero.css";

const Beauty = () => {
  return (
    <div className="carousel slide" id="carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.pharmaadda.in/wp-content/uploads/2019/01/Cosmetic-Franchise-Company-in-India.jpg"
            alt="home&living"
            className="d-block w-100 car-img"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://lh3.googleusercontent.com/DXtUkycsgolwELfCYC_sFSJJWRyjQ-9Us95IFGcpDhN5S6BUQEHPjkhLHh6bFT-WxH3FjWKvyUkWWfbtqz59s5ZNhOVu_GuaL1ep10A2=h450-rw"
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

export default Beauty;
