import { createSlice } from "@reduxjs/toolkit";

const productsCart = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered: [],
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

      if (existingItem.comments) {
        existingItem.comments.push(newComment);
      } else {
        existingItem.comments = [newComment];
      }
    },

    setProductsList: (state, action) => {
      state.products = action.payload;
      state.filtered = action.payload;
    },

    starHandler: (state, action) => {
      const StarID = action.payload;

      console.log("Asdfasdfasdfasdfasdf");
      const existingItem = state.products.find((item) => item.id === StarID);

      console.log(existingItem ? "ass" : "joon");
      if (existingItem) {
        var summ = 0;
        existingItem.comments.forEach((item) => {
          summ += item.stars;
        });
        const average = summ / existingItem.comments.length;
        const starsAverage = Math.round(average);
        existingItem.stars = starsAverage;
      }
      state.filtered = state.products;
    },
  },
});

export const productsActions = productsCart.actions;

export default productsCart;
