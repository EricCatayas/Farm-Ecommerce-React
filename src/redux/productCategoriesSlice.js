import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCategories: [],
};

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {
    setProductCategories: (state, action) => {
      state.productCategories = action.payload;
    },
  },
});

export const { setProductCategories } = productCategoriesSlice.actions;
export default productCategoriesSlice.reducer;
