import { createSlice } from "@reduxjs/toolkit";
import { saveCartToStorage, loadCartFromStorage } from "./cartStorage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(), // Initialize state utilizing persisted local storage inventory
    error: false,
    success: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const { product, quantity } = action.payload;
      const findProduct = state.items.find((item) => item.id === product.id);
      const currentQuantity = findProduct ? findProduct.quantity : 0;

      /* Boundary guard limiting maximum single cart item aggregation to 999 units */
      if (currentQuantity + quantity > 999) {
        state.error = true;
        state.success = false;
      } else {
        if (findProduct) {
          findProduct.quantity += quantity;
        } else {
          state.items.push({ ...product, quantity });
        }
        state.error = false;
        state.success = true;

        saveCartToStorage(state.items);
      }
    },

    clearItems(state) {
      state.items = [];
      state.error = false;
      state.success = false;
      saveCartToStorage(state.items);
    },

    increment(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (!product) return;
      if (product.quantity === 999) {
        state.error = true;
        return;
      }
      product.quantity += 1;
      state.error = false;
      saveCartToStorage(state.items);
    },

    decrement(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (!product) return;

      /* Completely excise product item from list if count reaches under one */
      if (product.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        product.quantity -= 1;
      }
      state.error = false;
      saveCartToStorage(state.items);
    },

    resetToast(state) {
      state.error = false;
      state.success = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
