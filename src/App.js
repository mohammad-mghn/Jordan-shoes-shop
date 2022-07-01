import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomeLayout from "./components/homeLayout";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

import "./styles/App.css";
import ProductsLayout from "./components/productsLayout";
import Error404 from "./components/error404";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Cart /> */}
        <Routes>
          <Route exact path="/" element={<HomeLayout />} />
          <Route exact path="/products" element={<ProductsLayout />} />
          <Route exact path="/man" element={<ProductsLayout />} />
          <Route exact path="/woman" element={<ProductsLayout />} />
          <Route exact path="/kids" element={<ProductsLayout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
