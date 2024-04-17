import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productReducer,
  },
  preloadedState: {
    cart: {
      cartItems: [],
      cartTotal: 0,
    },
    product: {
      products: [],
    },
  },
});
