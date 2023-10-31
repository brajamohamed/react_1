import React from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Hero = () => {
  return (
    <div id="slide" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#slide"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#slide"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#slide"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner carousel-fluid">
        <div className="carousel-item active">
          <img
            src="https://media.gq-magazine.co.uk/photos/5f7c6c69f1553ff1f6a67d8b/master/w_1600%2Cc_limit/20201006-trends-01.jpg"
            alt="iphone"
            className="d-block w-100 car-img"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Exclusive Men Collections</h5>
            <p>
              Visit us to explore a wholesome range of exlusive men wear
              collections.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://thumbs.dreamstime.com/b/indian-women-kurtis-lehanga-rack-sale-clothing-store-traditional-clothes-festival-151857869.jpg"
            alt="iphone"
            className="d-block w-100 car-img"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Unlimited Women Collections</h5>
            <p>
              Visit us to explore a unlimited range of latest women wear
              collections.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.klmfashionmall.com/wp-content/uploads/2019/06/blog-image2.jpg"
            alt="iphone"
            className="d-block w-100 car-img"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Grand Kids Collections</h5>
            <p>
              SVisit us to explore a grandier range of exlusive children wear
              collections..
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Hero;
