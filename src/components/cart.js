import React from "react";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Empty from "../assists/empty.png";

import "../styles/cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

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
              name={item.name}
              stars={item.stars}
              color={item.color}
              quantity={item.quantity}
              manifactor={item.manifactor}
              totalPrice={item.totalPrice}
            />
          ))}
          <div className="shop-section">
            GO TO PAY FOR {cart.totalPrice}$ ({cart.itemsList.length})
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
