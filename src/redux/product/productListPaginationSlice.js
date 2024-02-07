import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber:1,
  pageSize:4,
};

const productListPaginationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.pageNumber++;
    },
    decrementPage: (state) => {
      state.pageNumber--;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { incrementPage, decrementPage, setPageSize, setPageNumber } = productListPaginationSlice.actions;

export default productListPaginationSlice.reducer;
