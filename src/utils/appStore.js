import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    // user:userSlice - for add userslicer
  },
});

export default appStore;
