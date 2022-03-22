import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products-thunk";

const initialState = {
  products: [],
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
