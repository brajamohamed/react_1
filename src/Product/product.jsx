import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";
import { useState } from "react";
const Product = ({ item }) => {
  const [added, setAdded] = useState(false);
  console.log("recd in product", item);
  return (
    <div className="card col-lg-3 col-md-5 mx-2 mt-5 p-0">
      <img
        className=" card-img-top prod-img"
        src={item.thumbnail}
        alt="product-img"
      />
      <div className="card-body">
        <div className="card-title">
          <h5>{item.title}</h5>
        </div>
        <div className="card-text">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="card-footer bg-white border-0">
        {added ? (
          <button
            className="btn btn-danger w-100"
            onClick={() => setAdded(!added)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="btn btn-primary w-100"
            onClick={() => setAdded(!added)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default Product;
