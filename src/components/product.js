import React from "react";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import ThreeStars from "../assists/threestars.svg";

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
  const { id, name, manifactor, price, totalPrice, stars, colors } = props;

  const cart = useSelector((state) => state.cart.itemsList);

  const existingProductInCart = cart.find((cartItem) => cartItem.id === id);

  const color = "blue";

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

  const showCarthandler = () => dispatch(cartActions.showCart());
  return (
    <div className="product">
      <div className="shoes-image">
        <Container
          className="content"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: prop.xys.interpolate(trans),
          }}
        ></Container>
      </div>
      <div className="name--model--cost">
        <div className="name--model">
          {manifactor}
          <br />
          {name}
        </div>
        <div className="cost">{price}$</div>
      </div>
      <div className="stars--colors">
        <img src={ThreeStars} alt="" className="stars" />
        <div className="colors">
          {colors.map((color) => (
            <span className="color" key={color}>
              {color.toUpperCase()}{" "}
            </span>
          ))}
        </div>
      </div>
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
  );
};

export default Product;
{
  /* <button className="product-button loading-button">
<div className="add-to-cart-text">LOADING</div>
</button> */
}
