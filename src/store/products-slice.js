import { createSlice } from "@reduxjs/toolkit";

import { PRODUCTS } from "./products";

const productsCart = createSlice({
  name: "products",
  initialState: {
    products: PRODUCTS,
    filtered: PRODUCTS,
    changed: false,
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

    setProductsList: (state, action) => {
      state.products = action.payload;
    },
    changed: (state, action) => {
      state.changed = action.payload;
    },
    starHandler: (state, action) => {
      const StarID = action.payload.id;
      const star = action.payload.star;
      console.log("Asdfasdfasdfasdfasdf");
      const existingItem = state.products.find((item) => item.id === StarID);

      console.log(existingItem ? "ass" : "joon");
      if (existingItem) {
        var summ = 0;
        existingItem.comments.forEach((item) => {
          console.log(item.stars);
          summ += item.stars;
        });
        console.log(summ, "sum");
        const average = summ / existingItem.comments.length;
        const starsAverage = Math.round(average);
        existingItem.stars = starsAverage;
      }
      console.log("Asdf");
    },
  },
});

export const productsActions = productsCart.actions;

export default productsCart;
