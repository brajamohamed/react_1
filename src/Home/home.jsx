import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
      <h3>Welcome to Flipkart</h3>
      <Link to="/products">Browse Products</Link>
    </div>
  );
};
export default Home;
