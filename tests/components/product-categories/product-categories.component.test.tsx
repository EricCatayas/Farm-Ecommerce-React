import React from "react";
import "@testing-library/jest-dom";
import { ProductCategoriesState } from "../../../src/redux/productCategory/productCategories.reducer";
import { renderWithProviders } from "../../test.utils";
import { mockCategories } from "../../mockData/productCategories";
import ProductCategories from "../../../src/components/category-container/product-categories.component"; // Import the component you're testing

test("renders subcomponents of ProductCategories", () => {
  

  const categoriesInitialState: ProductCategoriesState = {
    productCategories: mockCategories,
    isLoading: false,
    error: null,
  };

  const { getByText } = renderWithProviders(
    <ProductCategories onSelectEventHandler={() => {}} />,
    { preloadedState: { productCategories: categoriesInitialState } }
  );

  // Check if the subcomponents are rendered in the component
  mockCategories.forEach((category) => {
    expect(getByText(category.name)).toBeInTheDocument();
  });
});
