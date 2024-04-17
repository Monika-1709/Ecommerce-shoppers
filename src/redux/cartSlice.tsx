import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "@/interfaces";

import Item from "antd/es/list/Item";

export interface cartState {
  cartItems: ProductInterface[];
  cartTotal: number;
}

const initialState: cartState = {
  cartItems: [],
  cartTotal: 0,
};

type Action = {
  type: string;
  payload: ProductInterface;
};

const addToCartReducer = (state: cartState, action: Action) => {
  const product = action.payload;
  state.cartItems.push(product);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: addToCartReducer,

    RemoveFromCart: (
      state,
      action: {
        type: string;

        payload: ProductInterface;
      }
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    EditProductInCart: (
      state,
      action: {
        type: string;

        payload: ProductInterface;
      }
    ) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { AddToCart, RemoveFromCart, EditProductInCart } =
  cartSlice.actions;
