import React, { useState, useRef } from "react";

import { CSSTransition } from "react-transition-group";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { productsAction } from "../store/products-slice";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import Star from "../assists/star.png";
import Stars from "../assists/stars.png";
import Shoes from "../assists/shoes-preview.png";
import Avatar from "../assists/comment-avatar.png";

import "../styles/productPage.css";
import Detail from "../elements/detail";

const ProductPage = ({ product }) => {
  const {
    id,
    name,
    manifactor,
    stars,
    price,
    colors,
    sizes,
    details,
    comments,
  } = product;

  const dispatch = useDispatch();

  const commentForm = useRef();

  const cart = useSelector((state) => state.cart.itemsList);

  const userName = useSelector((state) => state.auth.user.name);

  const showCarthandler = () => {
    dispatch(cartActions.showCart());
  };

  const [color, setColor] = useState(colors[0]);

  const [star, setStar] = useState(5);

  const [suggested, setSuggested] = useState(true);

  const [iscommentVaild, setIscommentVaild] = useState(false);

  const existingProductInCart = cart.find((cartItem) => cartItem.id === id);

  const date = new Date();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        manifactor,
        price,
        stars,
        color,
      })
    );
  };

  const suggestedHandler = () => {
    setSuggested((prevValue) => !prevValue);
  };

  const commentIsValidHandler = (e) => {
    if (e.target.value.trim() === "") {
      setIscommentVaild(false);
    } else {
      setIscommentVaild(true);
    }
  };

  const commentHandler = () => {
    const comment = {
      text: commentForm.current.value,
      stars: star,
      name: userName,
      time: date.getTime(),
      suggested: suggested,
    };
    dispatch(productsAction.addComment({ id, comment }));
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
  const suggestedList = [
    { text: "YES", value: true },
    { text: "NO", value: false },
  ];
  return (
    <div className="product-page-main-container">
      <section className="product-page-container">
        <div className="shoes-pictures-container">
          <img src={Shoes} alt="" className="main-picture" />
          <div className="shoes-other-pictures">
            <img src={Shoes} alt="" />
            <img src={Shoes} alt="" />
            <img src={Shoes} alt="" />
          </div>
        </div>
        <div className="shoes-information">
          <h1>{name.toUpperCase()}</h1>
          <h1>{manifactor.toUpperCase()}</h1>
          <div className="select-colors">
            COLOR:
            <span>
              {colors.map((item) => (
                <span
                  onClick={() => {
                    setColor(item);
                  }}
                  className={color === item ? "selected" : ""}
                  key={item}
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </span>
          </div>
          <div className="select-size">
            <h4>SIZE:</h4>
            <select id="ddlProducts" name="ddProducts">
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="details">
            <h2>Deatils:</h2>
            {details.map((item) => (
              <Detail
                header={item.header.toUpperCase()}
                value={item.value.toUpperCase()}
                key={item.header}
              />
            ))}
          </div>
          <div className="product-stars--price">
            <div>
              <img src={Stars} alt="" />
              <div>
                {[...Array(+stars.toFixed(0))].map((item, index) => (
                  <img src={Star} alt="" key={index} />
                ))}
              </div>
            </div>
            <h5>{shortenPrice(price)}$</h5>
          </div>
          <div className="free-delivery">
            <h5>FREE DELIVERY</h5>
            <h5>FOR ORDERS OVER 200$</h5>
          </div>
          <div className="poduct-page-button-container">
            <CSSTransition
              in={existingProductInCart}
              timeout={300}
              classNames="product-button"
              unmountOnExit
            >
              <button className="product-button added-button product-page-button">
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
                className="product-button product-page-button"
                onClick={() => {
                  addToCartHandler();
                }}
              >
                <div className="add-to-cart-text">ADD TO CART</div>
              </button>
            </CSSTransition>
          </div>
        </div>
        <div className="comments">
          <div className="comments-container">
            {comments.map((comment, index) => (
              <div className="comment" key={index}>
                <img src={Avatar} alt="" />
                <div className="comment-data">
                  <h3>{comment.name}</h3>
                  {/* <h4>{comment.time}</h4> */}
                  <h4>
                    <span>A WEEK AGO</span>
                    <span>
                      {comment.suggested ? "SUGGESTED" : "NOT SUGGESTED"}
                    </span>
                  </h4>
                  <p>{comment.text}</p>
                </div>
                <div className="product-star-rate">
                  <img src={Stars} alt="" className="product-star-rate-img" />
                  <div>
                    {[...Array(+comment.stars.toFixed(0))].map(
                      (item, index) => (
                        <img src={Star} alt="" key={index} />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="comments-form">
            <div className="comment-form-section">
              <h6>Your star:</h6>
              <div className="comment-stars-container">
                <img src={Stars} alt="" />
                <div className="comment-stars-star">
                  {[...Array(star + 1)].map((item, index) => (
                    <img src={Star} alt="" key={index} />
                  ))}
                </div>
                <div className="comment-stars-star-button">
                  {[...Array(6)].map((item, index) => (
                    <img
                      src={Star}
                      alt=""
                      onClick={() => {
                        setStar(index);
                      }}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="comment-form-section">
              <h6>Your star:</h6>
              <div className="yes-no">
                {suggestedList.map((item, index) => (
                  <h6
                    className={item.value === suggested ? "suggested" : ""}
                    onClick={suggestedHandler}
                    key={index}
                  >
                    {item.text}
                  </h6>
                ))}
              </div>
            </div>
            <div className="comment-input">
              <input
                type="text"
                onChange={commentIsValidHandler}
                ref={commentForm}
              />

              <CSSTransition
                in={iscommentVaild}
                timeout={300}
                classNames="product-button"
                unmountOnExit
              >
                <button>
                  <SendRoundedIcon onClick={commentHandler} />
                </button>
              </CSSTransition>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
