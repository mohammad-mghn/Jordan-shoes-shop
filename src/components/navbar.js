import React, { useState, useEffect, useRef } from "react";

import { useLocation, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import LogoutPopUp from "./logoutPopUp";
import LinkNavbar from "../elements/link";
import { cartActions } from "../store/cart-slice";
import { productsAction } from "../store/products-slice";

import Logo from "../assists/logo.png";
import Avatar from "../assists/avatar.png";

import "../styles/navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const itemsListLength = useSelector((state) => state.cart.itemsList.length);

  const links = [
    { path: "/", text: "HOME" },
    { path: "/jumpman-2021-pf", text: "PRODUCTS" },
    { path: "/man", text: "MAN" },
    { path: "/woman", text: "WOMAN" },
    { path: "/kids", text: "KIDS" },
  ];

  const location = useLocation();

  const [searchBar, setSearchBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  const showCarthandler = () => {
    menuHandler();
    dispatch(cartActions.showCart());
  };

  const logoutPopUpHandler = () => {
    setLogoutPopUp((prevValue) => !prevValue);
  };

  const menuHandler = () => {
    setMenu((prevValue) => !prevValue);
  };

  const searchBarhandler = () => {
    setSearchBar((prevValue) => !prevValue);
  };
  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch(productsAction.search(e.target.value));
  };
  return (
    <>
      <div className="navbar-contianer">
        <Link to="/" title="home-page">
          <img src={Logo} alt="" className="navbar-logo" />
        </Link>
        <div className="menu-icon" onClick={menuHandler}>
          <MenuRoundedIcon sx={{ fontSize: "2.75rem" }} />
        </div>
        <div className="links">
          {links.map((item) => (
            <LinkNavbar item={item} pathname={pathname} key={item.text} />
          ))}
        </div>
        <CSSTransition
          in={searchBar}
          timeout={300}
          classNames="loginAndSignup-button"
          unmountOnExit
        >
          <div className="search-bar">
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search a key word"
              required
              onChange={searchHandler}
            />
            <SearchRoundedIcon
              className="search-bar-icon"
              onClick={searchHandler}
            />
          </div>
        </CSSTransition>
        <div className="cart--avatar">
          <SearchRoundedIcon onClick={searchBarhandler} />
          <span
            className={itemsListLength > 0 && "cart-icon"}
            data-number={itemsListLength}
          >
            <ShoppingCartRoundedIcon onClick={showCarthandler} />
          </span>
          <img
            src={Avatar}
            alt=""
            className="avatar"
            onClick={logoutPopUpHandler}
          />
        </div>
      </div>
      <CSSTransition in={menu} timeout={300} classNames="cart" unmountOnExit>
        <>
          <div className="navbar-contianer-mobile" id="navbar">
            <Link to="/" title="home-page">
              <img src={Logo} alt="" className="navbar-logo-mobile" />
            </Link>
            <CSSTransition
              in={searchBar}
              timeout={300}
              classNames="loginAndSignup-button"
              unmountOnExit
            >
              <div className="search-bar-mobile">
                <input
                  type="text"
                  className="search-bar-input"
                  placeholder="Search a key word"
                  required
                  onChange={searchHandler}
                />
                <SearchRoundedIcon
                  className="search-bar-icon"
                  onClick={searchHandler}
                />
              </div>
            </CSSTransition>
            <div className="links-mobile">
              {links.map((item) => (
                <LinkNavbar item={item} pathname={pathname} key={item.text} />
              ))}
            </div>

            <div className="cart--avatar-mobile">
              <SearchRoundedIcon onClick={searchBarhandler} />
              <span
                className={itemsListLength > 0 && "cart-icon"}
                data-number={itemsListLength}
              >
                <ShoppingCartRoundedIcon
                  onClick={showCarthandler}
                  data-number={itemsListLength}
                  className="cart-icon-mobile"
                />
              </span>
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
