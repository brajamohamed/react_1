import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <Link to="/">
        <h5 className="text-primary ms-5">Flipkart</h5>
      </Link>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ">
        <ul className="navbar-nav navigation w-100" id="menu">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white fw-bolder">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white fw-bolder">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link text-white fw-bolder">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
