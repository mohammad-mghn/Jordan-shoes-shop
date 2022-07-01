import React from "react";

import Landing from "./landing";
import Products from "./products";

const HomeLayout = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "var(--backgroundColor)",
      }}
    >
      <Landing />
      <div style={{ width: "95%", margin: "2rem 2.5% 0 2.5%" }}>
        <h2 className="home-products-title">Products</h2>
        <Products />
      </div>
    </div>
  );
};

export default HomeLayout;
