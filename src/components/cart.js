import React from "react";

import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import CartItem from "./cartItem";
import { cartActions } from "../store/cart-slice";

import Empty from "../assists/empty.png";

import "../styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const showCarthandler = () => dispatch(cartActions.showCart());

  return (
    <div className="cart-contianer">
      <header>
        <h3>BUY NOW</h3>
        <CloseRoundedIcon
          className="cart-close-button"
          onClick={showCarthandler}
        />
      </header>
      {cart.itemsList.length === 0 ? (
        <section className="empty">
          <div>
            <img src={Empty} alt="" />
            <h4>THERE'S NO ITEM IN CART.</h4>
          </div>
        </section>
      ) : (
        <section className="cart-items">
          {cart.itemsList.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              stars={item.stars}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              name={item.name.toUpperCase()}
              color={item.color.toUpperCase()}
              manifactor={item.manifactor.toUpperCase()}
            />
          ))}
        </section>
      )}
      <div className="shop-section">
        GO TO PAY FOR {cart.totalPrice}$ ({cart.itemsList.length})
      </div>
    </div>
  );
};

export default Cart;
