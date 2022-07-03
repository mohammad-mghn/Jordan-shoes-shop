import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    Login: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.isLoggedIn = true;
    },
    IsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
