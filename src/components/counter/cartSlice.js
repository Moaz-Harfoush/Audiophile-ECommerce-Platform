import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const { product, quantity } = action.payload;

      const findProduct = state.find((item) => item.id === product.id);
      if (findProduct) {
        const newQuantity = findProduct.quantity + quantity;
        if (newQuantity > 999) {
          newQuantity = 999;
          return (findProduct.quantity = newQuantity);
        } else {
          findProduct.quantity = newQuantity;
        }
      } else {
        const initialQuantity = quantity > 999 ? 999 : quantity;
        const cloneProduct = { ...product, quantity: initialQuantity };
        state.push(cloneProduct);
      }
    },
    removeItemFromCart(state, action) {},
    clearItems(state, action) {
      return [];
    },
    increment: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity < 999) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.find((item) => item.id === action.payload);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
