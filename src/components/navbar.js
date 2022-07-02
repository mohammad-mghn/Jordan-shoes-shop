import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../store/cart-slice";

import LinkNavbar from "../elements/link";

import "../styles/navbar.css";

import Logo from "../assists/logo.png";
import Avatar from "../assists/avatar.png";
const Navbar = () => {
  const dispatch = useDispatch();

  const links = [
    { path: "/", text: "HOME" },
    { path: "/products", text: "PRODUCTS" },
    { path: "/man", text: "MAN" },
    { path: "/woman", text: "WOMAN" },
    { path: "/kids", text: "KIDS" },
  ];

  const location = useLocation();

  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  var prevScrollpos = window.pageYOffset;

  const showCarthandler = () => dispatch(cartActions.showCart());

  function onScroll() {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-6rem";
      }
      prevScrollpos = currentScrollPos;
    };
  }
  window.addEventListener("scroll", onScroll);

  return (
    <div className="navbar-contianer" id="navbar">
      <img src={Logo} alt="" className="navbar-logo" />
      <div className="links">
        {links.map((item) => (
          <LinkNavbar item={item} pathname={pathname} key={item.text} />
        ))}
      </div>
      <div className="cart--avatar">
        <SearchRoundedIcon />
        <ShoppingCartRoundedIcon onClick={showCarthandler} />
        <img src={Avatar} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
