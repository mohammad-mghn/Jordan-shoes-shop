import { createSlice } from "@reduxjs/toolkit";

const productsCart = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: "1",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 144,
        colors: ["red", "green"],
      },
      {
        id: "2",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "3",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "4",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "5",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "6",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "7",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "8",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
      {
        id: "9",
        name: "JORDAN",
        manifactor: "JUMPMAN 2021 PF",
        stars: 3,
        price: 44,
        colors: ["red"],
      },
    ],
  },
  reducers: {},
});

export const cartActions = productsCart.actions;

export default productsCart;
