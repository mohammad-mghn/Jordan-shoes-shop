import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productsCart from "./products-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsCart.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
