import React from "react";

import { useSelector } from "react-redux";

import "../styles/product.css";
import "../styles/products.css";

import Product from "./product";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          manifactor={product.manifactor}
          price={product.price}
          totalPrice={product.price}
          stars={product.stars}
          colors={product.colors}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
