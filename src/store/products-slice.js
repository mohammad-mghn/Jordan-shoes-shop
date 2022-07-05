import { createSlice } from "@reduxjs/toolkit";

import { PRODUCTS } from "./products";

const productsCart = createSlice({
  name: "products",
  initialState: {
    products: PRODUCTS,
    filtered: PRODUCTS,
  },
  reducers: {
    search: (state, action) => {
      console.log("asdfasdf");
      state.filtered = state.products.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
      if (action.payload.trim() === "") {
        state.filtered = state.products;
      }
    },
  },
});

export const productsAction = productsCart.actions;

export default productsCart;
