
import { createSelector } from "@reduxjs/toolkit";
import { ProductCategoriesState } from "./productCategories.reducer"

const selectProductCategoryReducer = (state): ProductCategoriesState => state.productCategories;

export const selectCategories = createSelector(
    [selectProductCategoryReducer],
    (productCategoriesSlice) => productCategoriesSlice.productCategories
);

export const selectCategoriesIsLoading = createSelector(
    [selectProductCategoryReducer],
    (productCategoriesSlice) => productCategoriesSlice.isLoading
);