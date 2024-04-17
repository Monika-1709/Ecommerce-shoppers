// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: CartSlice.reducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState: {
    cart: {
      cartItems: [],
      cartTotal: 0,
      products: [],
    },
  },
});
