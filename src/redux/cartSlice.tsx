import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "@/Interface";

interface CartState {
  cartItems: ProductInterface[];
  cartTotal: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], cartTotals: 0 },
  reducers: {
    AddProductToCart: (
      state,
      action: {
        type: string;
        payload: ProductInterface;
      }
    ) => {
      state.cartItems.push(action.payload);
      state.cartTotals += action.payload.price;
    },
    RemoveProductFromCart: (
      state,
      action: {
        type: string;
        payload: ProductInterface;
      }
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload.category._id
      );
      //   state.cartTotals += action.payload.price;
    },
  },
});

export const { AddProductToCart, RemoveProductFromCart } = cartSlice.actions;
