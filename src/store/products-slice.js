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
      state.filtered = state.products.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
      if (action.payload.trim() === "") {
        state.filtered = state.products;
      }
    },
    addComment: (state, action) => {
      const ID = action.payload.id;
      const newComment = action.payload.comment;
      
      const existingItem = state.products.find((item) => item.id === ID);

      existingItem.comments.push(newComment);
    },
  },
});

export const productsAction = productsCart.actions;

export default productsCart;
