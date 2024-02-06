import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCategories: [],
  isLoading: false,
  errors: [],
};

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {
    setProductCategories: (state, action) => {
      state.productCategories = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    }
  },
});


export const { setProductCategories, setLoading, setErrors } = productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
