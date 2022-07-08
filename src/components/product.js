import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import Star from "../assists/star.png";
import Stars from "../assists/stars.png";

import "../styles/product.css";

// <> will use for img 3d mouse hover
const Container = styled(animated.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// </>

const Product = (props) => {
  const { id, name, manifactor, price, totalPrice, stars, colors, newPrice } =
    props;

  const cart = useSelector((state) => state.cart.itemsList);

  const existingProductInCart = cart.find((cartItem) => cartItem.id === id);

  const [color, setColor] = useState(colors[0]);

  const dispatch = useDispatch();

  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        manifactor,
        price,
        totalPrice,
        stars,
        color,
      })
    );
  };

  const shortenPrice = (price) => {
    if (price > 1000000) {
      return (price / 1000000).toFixed(1) + "M";
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + "K";
    } else {
      return price;
    }
  };

  const showCarthandler = () => dispatch(cartActions.showCart());

  return (
    <div className="product">
      <Link to={"/" + name.replaceAll(" ", "-")} replace>
        <div className="shoes-image">
          <Container
            className="content"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: prop.xys.interpolate(trans),
            }}
          ></Container>
        </div>
        <div className="name--model--cost">
          <div className="name--model">
            {manifactor.toUpperCase()}
            <br />
            {name.toUpperCase()}
          </div>

          <div className="cost">
            {newPrice && <span className="new-cost">{newPrice}$</span>}
            <div className={newPrice && "off"}> {shortenPrice(price)}$</div>
          </div>
        </div>
        <div className="stars--colors">
          <div className="stars-container">
            <img src={Stars} alt="" className="stars" />
            <div className="stars-upper">
              {[...Array(+stars.toFixed(0))].map(() => (
                <img src={Star} alt="" className="star" />
              ))}
            </div>
          </div>
          <div className="colors">
            {colors.map((colorItem) => (
              <span
                className={`color ${color === colorItem && "color-selected"}`}
                key={colorItem}
                onClick={() => {
                  setColor(colorItem);
                }}
              >
                {colorItem.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="poduct-button-container">
        <CSSTransition
          in={existingProductInCart}
          timeout={300}
          classNames="product-button"
          unmountOnExit
        >
          <button className="product-button added-button">
            <div className="added-to-cart-text">ADDED TO CART</div>
            <div className="added-to-cart-icon-contianer">
              <ShoppingCartRoundedIcon onClick={showCarthandler} />
            </div>
          </button>
        </CSSTransition>
        <CSSTransition
          in={!existingProductInCart}
          timeout={300}
          classNames="product-button"
          unmountOnExit
        >
          <button
            className="product-button"
            onClick={() => {
              addToCartHandler();
            }}
          >
            <div className="add-to-cart-text">ADD TO CART</div>
          </button>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Product;
