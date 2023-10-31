import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../Hero/hero.css";
const Men = () => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.shopaccino.com/qarot/articles/blog-610669_l.jpg?v=466"
            alt="mens-products"
            className="data-block w-100 car-img img-fluid"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://thethaiger.com/wp-content/uploads/2023/06/Mens-Clothing-Suits-1.jpg"
            alt="mens-products"
            className="data-block w-100 car-img img-fluid"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Men;
