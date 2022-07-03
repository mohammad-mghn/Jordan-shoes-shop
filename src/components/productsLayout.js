import React from "react";

import Products from "./products";
import AnimatedPage from "./animatedPage";

import "../styles/layout.css";

const ProductsLayout = () => {
  return (
    <AnimatedPage>
      <div className="products-page">
        <Products />
      </div>
    </AnimatedPage>
  );
};

export default ProductsLayout;
