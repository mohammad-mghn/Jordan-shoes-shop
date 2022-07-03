import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { CSSTransition } from "react-transition-group";
import { cartActions } from "./store/cart-slice";
import { AnimatePresence } from "framer-motion";
import { authActions } from "./store/auth-slice";

import HomeLayout from "./components/homeLayout";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Auth from "./components/auth";
import AnimatedPage from "./components/animatedPage";

import "./styles/App.css";
import ProductsLayout from "./components/productsLayout";
import Error404 from "./components/error404";

function App() {
  const user = useSelector((state) => state.auth.user);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const showCart = useSelector((state) => state.cart.showCart);

  const itemsList = useSelector((state) => state.cart.itemsList);

  const dispatch = useDispatch();

  const [LoggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("jordan-shop-user")) ? true : false
  );

  const showCarthandler = () => dispatch(cartActions.showCart());

  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const allUsers = await fetch(
        "https://vito-shopping-app-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      );
      var usersList = await allUsers.json();

      const localUsersList = usersList ? usersList : [];

      const existingUser = localUsersList.find(
        (item) =>
          item.email ===
          JSON.parse(localStorage.getItem("jordan-shop-user")).email
      );

      if (existingUser) {
        dispatch(authActions.Login(existingUser));
        dispatch(
          cartActions.setItemsList(
            existingUser.cartItemsList ? existingUser.cartItemsList : []
          )
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const allUsers = await fetch(
        "https://vito-shopping-app-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      );
      var usersList = await allUsers.json();

      const localUsersList = usersList ? usersList : [];

      localUsersList.forEach((item) => {
        if (item.email === user.email) {
          item.cartItemsList = itemsList;
          return item;
        } else {
          return item;
        }
      });
      console.log(localUsersList);

      const fetchUser = await fetch(
        "https://vito-shopping-app-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "PUT",
          body: JSON.stringify(localUsersList),
        }
      );
    };
    fetchData();
  }, [itemsList]);

  return (
    <>
      {isLoggedIn ? (
        <AnimatedPage>
          <Navbar />

          <CSSTransition
            in={showCart}
            timeout={300}
            classNames="cart"
            unmountOnExit
          >
            <Cart />
          </CSSTransition>
          {showCart && (
            <div className="close-section" onClick={showCarthandler}></div>
          )}

          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route exact path="/" element={<HomeLayout />} />
              <Route exact path="/products" element={<ProductsLayout />} />
              <Route exact path="/man" element={<ProductsLayout />} />
              <Route exact path="/woman" element={<ProductsLayout />} />
              <Route exact path="/kids" element={<ProductsLayout />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </AnimatePresence>
        </AnimatedPage>
      ) : (
        <AnimatedPage>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Auth />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </AnimatedPage>
      )}
    </>
  );
}

export default App;
