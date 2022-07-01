import React from "react";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import CartItem from "./cartItem";

import Empty from "../assists/empty.png";

import "../styles/cart.css";

const Cart = () => {
  return (
    <div className="cart-contianer">
      <header>
        <h3>BUY NOW</h3>
        <CloseRoundedIcon className="cart-close-button" />
      </header>
      {/* <section className="empty">
        <div>
          <img src={Empty} alt="" />
          <h4>THERE'S NO ITEM IN CART.</h4>
        </div>
      </section> */}
      <section className="cart-items">
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="shop-section">GO TO PAY (3)</div>
      </section>
    </div>
  );
};

export default Cart;
