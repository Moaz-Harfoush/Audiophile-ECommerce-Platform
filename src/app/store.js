import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

/* Configure the global Redux store for the application */
export const store = configureStore({
  reducer: {
    /* Map the cart slice reducer to the 'cart' state key */
    cart: cartSlice,
  },
});
