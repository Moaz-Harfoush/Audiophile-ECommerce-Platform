import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/counter/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
