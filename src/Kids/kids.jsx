import React from "react";
import "../Hero/hero.css";
const Kids = () => {
  return (
    <div className="carousel slide" id="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images-static.nykaa.com/uploads/895224e6-0579-434d-a9fc-390f666dd4b0.jpg?tr=w-600,cm-pad_resize"
            alt="kids"
            className="d-block w-100 car-img"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.sassymamasg.com/wp-content/uploads/2023/09/indian-dress-singapore-nimbu.jpeg"
            alt="kids"
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

export default Kids;
