import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  errors: [],
};

const productsListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },

  },
});

export const { setProducts, setLoading, setErrors } = productsListSlice.actions;

export default productsListSlice.reducer;
