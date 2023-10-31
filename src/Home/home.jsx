import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="categories d-flex flex-column align-items-center mt-5 ">
      <h3>Welcome to Myntra</h3>
      <h4 className="text-warning">Browse from Categories</h4>
      <div className="d-flex align-items-center">
        <h5 className="mt-2 m-2 bg-primary rounded p-1">
          <Link to="/men" className="text-decoration-none text-white p-2">
            Men
          </Link>
        </h5>
        <h5 className="mt-2 m-2 bg-primary rounded p-1 p-1">
          <Link to="/women" className="text-decoration-none text-white p-3">
            Women
          </Link>
        </h5>
        <h5 className="mt-2 m-2 bg-primary rounded p-1">
          <Link to="/kids" className="text-decoration-none text-white p-3">
            Kids
          </Link>
        </h5>
        <h5 className="mt-2 m-2 bg-primary rounded p-1">
          <Link
            to="/home&living"
            className="text-decoration-none text-white p-3"
          >
            Home & Living
          </Link>
        </h5>
        <h5 className="mt-2 m-2 bg-primary rounded p-1">
          <Link to="/beauty" className="text-decoration-none text-white p-3">
            Beauty
          </Link>
        </h5>
        <h5 className="mt-2 m-2 bg-primary rounded p-1">
          <Link to="/studio" className="text-decoration-none text-white p-3">
            Studio
          </Link>
        </h5>
      </div>
    </div>
  );
};
export default Home;
