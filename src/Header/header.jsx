import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h5 className="text-primary ms-5">Flipkart</h5>
        </Link>
        <button
          className="navbar-toggler me-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav navigation ms-auto me-5">
            <li className="nav-item">
              <Link to="/" className="nav-link menuLink text-white fw-bolder">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link menuLink text-white fw-bolder"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link active menuLink text-white fw-bolder"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
