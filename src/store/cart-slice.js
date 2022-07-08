import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    totalPrice: 0,
    showCart: false,
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

      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice += existingItem.price;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.itemsList.push({
          quantity: 1,
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          stars: newItem.stars,
          color: newItem.color,
          totalPrice: newItem.price,
          manifactor: newItem.manifactor,
        });

        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.totalQuantity--;
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalPrice -= existingItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      state.totalPrice -= existingItem.price;

      state.itemsList = state.itemsList.filter((item) => item.id !== id);

      state.totalQuantity--;
    },
    setItemsList: (state, action) => {
      const items = action.payload;
      state.itemsList = items;

      let totalPrice = 0;

      state.itemsList.forEach((item) => (totalPrice += item.totalPrice));

      state.totalPrice = totalPrice;
    },
    logout: (state) => {
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
