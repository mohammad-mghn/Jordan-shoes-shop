import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import LogoutPopUp from "./logoutPopUp";
import LinkNavbar from "../elements/link";
import { cartActions } from "../store/cart-slice";

import Logo from "../assists/logo.png";
import Avatar from "../assists/avatar.png";

import "../styles/navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const itemsListLength = useSelector((state) => state.cart.itemsList.length);

  const links = [
    { path: "/", text: "HOME" },
    { path: "/products", text: "PRODUCTS" },
    { path: "/man", text: "MAN" },
    { path: "/woman", text: "WOMAN" },
    { path: "/kids", text: "KIDS" },
  ];

  const location = useLocation();

  const [menu, setMenu] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
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

  const logoutPopUpHandler = () => {
    setLogoutPopUp((prevValue) => !prevValue);
  };

  const menuHandler = () => {
    setMenu((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="navbar-contianer" id="navbar">
        <img src={Logo} alt="" className="navbar-logo" />
        <div className="menu-icon" onClick={menuHandler}>
          <MenuRoundedIcon sx={{ fontSize: "2.75rem" }} />
        </div>
        <div className="links">
          {links.map((item) => (
            <LinkNavbar item={item} pathname={pathname} key={item.text} />
          ))}
        </div>
        <div className="cart--avatar">
          <SearchRoundedIcon />
          <ShoppingCartRoundedIcon
            onClick={showCarthandler}
            data-number={itemsListLength}
            className="cart-icon"
          />
          <img
            src={Avatar}
            alt=""
            className="avatar"
            onClick={logoutPopUpHandler}
          />
        </div>
      </div>
      <CSSTransition
        in={menu}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <>
          <div className="navbar-contianer-mobile" id="navbar">
            <img src={Logo} alt="" className="navbar-logo-mobile" />
            <div className="links-mobile">
              {links.map((item) => (
                <LinkNavbar item={item} pathname={pathname} key={item.text} />
              ))}
            </div>
            <div className="cart--avatar-mobile">
              <SearchRoundedIcon />
              <ShoppingCartRoundedIcon
                onClick={showCarthandler}
                data-number={itemsListLength}
                className="cart-icon-mobile"
              />
              <img
                src={Avatar}
                alt=""
                className="avatar-mobile"
                onClick={logoutPopUpHandler}
              />
            </div>
          </div>
          <div className="navbar-container-close" onClick={menuHandler}></div>
        </>
      </CSSTransition>
      <CSSTransition
        in={logoutPopUp}
        timeout={300}
        classNames="loginAndSignup-button"
        unmountOnExit
      >
        <LogoutPopUp logoutPopUpHandler={logoutPopUpHandler} />
      </CSSTransition>
    </>
  );
};

export default Navbar;
