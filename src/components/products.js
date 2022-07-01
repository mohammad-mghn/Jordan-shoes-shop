import React from "react";

import "../styles/product.css";
import "../styles/products.css";

import Shoes from "../assists/shoes-preview.png";
import ThreeStars from "../assists/threestars.svg";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
const Products = () => {
  const colors = ["blue", "green", "red"];
  return (
    <>
      <div className="products-container">
        <div className="product">
          <div className="shoes-image">
            <img src={Shoes} alt="" className="shoes-preview" />
          </div>
          <div className="name--model--cost">
            <div className="name--model">
              JORDAN
              <br />
              JUMPMAN 2021 PF
            </div>
            <div className="cost">134$</div>
          </div>
          <div className="stars--colors">
            <img src={ThreeStars} alt="" className="stars" />
            <div className="colors">
              {colors.map((color) => (
                <span className="color">{color.toUpperCase()} </span>
              ))}
            </div>
          </div>
          <button className="product-button">
            <div className="add-to-cart-text">ADD TO CART</div>
          </button>
        </div>
        <div className="product">
          <div className="shoes-image">
            <img src={Shoes} alt="" className="shoes-preview" />
          </div>
          <div className="name--model--cost">
            <div className="name--model">
              JORDAN
              <br />
              JUMPMAN 2021 PF
            </div>
            <div className="cost">134$</div>
          </div>
          <div className="stars--colors">
            <img src={ThreeStars} alt="" className="stars" />
            <div className="colors">
              {colors.map((color) => (
                <span className="color">{color.toUpperCase()}</span>
              ))}
            </div>
          </div>
          <button className="product-button loading-button">
            <div className="add-to-cart-text">LOADING</div>
          </button>
        </div>
        <div className="product">
          <div className="shoes-image">
            <img src={Shoes} alt="" className="shoes-preview" />
          </div>
          <div className="name--model--cost">
            <div className="name--model">
              JORDAN
              <br />
              JUMPMAN 2021 PF
            </div>
            <div className="cost">134$</div>
          </div>
          <div className="stars--colors">
            <img src={ThreeStars} alt="" className="stars" />
            <div className="colors">
              {colors.map((color) => (
                <span className="color">{color.toUpperCase()} </span>
              ))}
            </div>
          </div>
          <button className="product-button added-button">
            <div className="added-to-cart-text">ADDED TO CART</div>
            <div className="added-to-cart-icon-contianer">
              <ShoppingCartRoundedIcon />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
