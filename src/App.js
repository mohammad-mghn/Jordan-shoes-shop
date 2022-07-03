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

import HomeLayout from "./components/homeLayout";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Auth from "./components/auth";
import AnimatedPage from "./components/animatedPage";

import "./styles/App.css";
import ProductsLayout from "./components/productsLayout";
import Error404 from "./components/error404";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const showCart = useSelector((state) => state.cart.showCart);

  const dispatch = useDispatch();
  const showCarthandler = () => dispatch(cartActions.showCart());
  const location = useLocation();
  return (
    <>
      {isLoggedIn && (
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
      )}
      {!isLoggedIn && (
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
