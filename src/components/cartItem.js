import React from "react";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

import ShoesImage from "../assists/shoes-preview.png";
import Stars from "../assists/threestars.svg";

import "../styles/cartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <img src={ShoesImage} alt="" className="shoes-preview" />
      <div>
        <div className="name--model">
          JORDAN
          <br />
          JUMPMAN 2021 PF
        </div>
        <img src={Stars} alt="" />
        <h5>134$</h5>
        <div className="remove--add">
          <button>
            {" "}
            <RemoveRoundedIcon />
          </button>
          <button>
            {" "}
            <AddRoundedIcon />
          </button>
          <button>
            {" "}
            <DeleteOutlineRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
