import React from "react";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../store/cart-slice";

import ShoesImage from "../assists/shoes-preview.png";
import Stars from "../assists/threestars.svg";

import "../styles/cartItem.css";

const CartItem = (props) => {
  const { id, name, manifactor, color, quantity, totalPrice } = props;

  const dispatch = useDispatch();

  const increament = () => {
    dispatch(cartActions.addToCart({ id: id }));
  };

  const decreament = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
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

  return (
    <div className="cart-item-container">
      <img src={ShoesImage} alt="" className="shoes-preview" />
      <div>
        <div className="name--model">
          {manifactor}
          <br />
          {name}
        </div>
        <div>
          <img src={Stars} alt="" />
          <h6>{color.toUpperCase()}</h6>
          <h6>{quantity}x</h6>
        </div>
        <h5>{shortenPrice(totalPrice)}$</h5>
        <div className="remove--add">
          <button>
            <RemoveRoundedIcon onClick={decreament} sx={{ fontSize: "150%" }} />
          </button>
          <button>
            <AddRoundedIcon onClick={increament} sx={{ fontSize: "150%" }} />
          </button>
          <button>
            <DeleteOutlineRoundedIcon
              onClick={deleteItem}
              sx={{ fontSize: "150%" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
