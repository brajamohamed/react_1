import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
      <h3>Flipkart by WallMart</h3>
      <Link to="/products">Browse Products</Link>
    </div>
  );
};
export default About;
