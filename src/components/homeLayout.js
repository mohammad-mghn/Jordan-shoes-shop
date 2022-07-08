import React from "react";

import Landing from "./landing";
import Products from "./products";
import BestSales from "./bestSales";
import AnimatedPage from "./animatedPage";

import "../styles/layout.css";

const HomeLayout = () => {
  return (
    <AnimatedPage>
      <div className="home-layout-container">
        <Landing />
        <div className="home-layout-products">
          <h2 className="home-products-title">Products</h2>
          <Products />
          <h2 className="home-products-title">Best sales</h2>
          <BestSales />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HomeLayout;
