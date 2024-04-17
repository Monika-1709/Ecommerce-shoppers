import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ProductState {
  products: ProductInterface[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductInterface[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
