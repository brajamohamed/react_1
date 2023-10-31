import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="categories d-flex flex-column align-items-center mt-5 flex-wrap">
      <h3>Welcome to Myntra</h3>
      <h4 className="text-warning">Browse from Categories</h4>
      <div className="row">
        <div className="col-md-2">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link to="/men" className="text-decoration-none text-white p-2">
              Men
            </Link>
          </h5>
        </div>
        <div className="col-md-3">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link to="/women" className="text-decoration-none text-white p-3">
              Women
            </Link>
          </h5>
        </div>
        <div className="col-md-2">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link to="/kids" className="text-decoration-none text-white p-3">
              Kids
            </Link>
          </h5>
        </div>
        <div className="col-md-4">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link
              to="/home&living"
              className="text-decoration-none text-white p-3"
            >
              Home & Living
            </Link>
          </h5>
        </div>
        <div className="col-md-3">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link to="/beauty" className="text-decoration-none text-white p-3">
              Beauty
            </Link>
          </h5>
        </div>
        <div className="col-md-3">
          <h5 className="mt-2 m-1 bg-primary rounded p-1 text-center">
            <Link to="/studio" className="text-decoration-none text-white p-3">
              Studio
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Home;
