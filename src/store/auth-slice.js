import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;

      state.isLoggedIn = true;
    },
    Logout: (state) => {
      state.isLoggedIn = false;
    },
    IsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
