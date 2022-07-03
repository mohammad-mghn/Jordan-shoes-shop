import { createSlice } from "@reduxjs/toolkit";

import { PRODUCTS } from "./products";

const productsCart = createSlice({
  name: "products",
  initialState: {
    products: PRODUCTS,
  },
  reducers: {},
});

export const cartActions = productsCart.actions;

export default productsCart;
