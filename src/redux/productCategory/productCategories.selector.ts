
import { createSelector } from "@reduxjs/toolkit";
import { ProductCategoriesState } from "./productCategories.reducer"
import { RootState } from "../root.types";

const selectProductCategoryReducer = (state : RootState): ProductCategoriesState => state.productCategories;

export const selectCategories = createSelector(
    [selectProductCategoryReducer],
    (productCategoriesSlice) => productCategoriesSlice.productCategories
);

export const selectCategoriesIsLoading = createSelector(
    [selectProductCategoryReducer],
    (productCategoriesSlice) => productCategoriesSlice.isLoading
);