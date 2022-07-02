import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    totalPrice: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalPrice += existingItem.price;
      } else {
        state.itemsList.push({
          quantity: 1,
          id: newItem.id,
          name: newItem.name,
          manifactor: newItem.manifactor,
          price: newItem.price,
          totalPrice: newItem.totalPrice,
          stars: newItem.stars,
          color: newItem.color,
          length: 0,
        });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalPrice--;
      } else {
        existingItem.totalPrice -= existingItem.price;
        existingItem.quantity--;
      }
      state.totalPrice -= existingItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      state.itemsList = state.itemsList.filter((item) => item.id !== id);
      state.totalPrice--;

      state.totalPrice -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;