import { useContext } from "react";
import { productContext } from "../App";
import Product from "../Product/product";

const Products = () => {
  const products = useContext(productContext);
  return (
    <div className="container ">
      <div className="row justify-content-center">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Products;
