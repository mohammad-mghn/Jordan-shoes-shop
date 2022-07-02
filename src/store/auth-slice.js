import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {
      id: "1",
      name: "vito",
      email: "vito.mohagheghian@gmail.com",
      password: "vitopwpw",
      cart: {},
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;