import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../Hero/hero.css";
const Women = () => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://assets.ltkcontent.com/images/84943/fashion-terms_22064cce7e.jpg"
            alt="women"
            className="d-block w-100 car-img"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE="
            alt="women"
            className="d-block w-100 car-img"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        data-bs-slide="prev"
        type="button"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        data-bs-slide="next"
        type="button"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Women;
