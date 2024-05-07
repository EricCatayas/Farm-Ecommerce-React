import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../src/redux/store"; // Import your Redux store
import ProductCategory from "../../../src/models/ProductCategory";
import { ProductCategoriesState } from "../../../src/redux/productCategory/productCategories.reducer";
import { renderWithProviders } from "../../test.utils";
import ProductCategories from "../../../src/components/category-container/product-categories.component"; // Import the component you're testing
import React from "react";

test("renders subcomponents of ProductCategories", () => {
  const initialCategories: ProductCategory[] = [
    {
      id: 1,
      name: "Category A",
      subcategories: [
        {
          id: 11,
          name: "SubCategory A1",
          subcategories: [],
          image_Url: "",
        },
        {
          id: 12,
          name: "SubCategory A2",
          subcategories: [],
          image_Url: "",
        },
      ],
      image_Url: "",
    },
    {
      id: 2,
      name: "Category B",
      subcategories: [
        {
          id: 21,
          name: "SubCategory B1",
          image_Url: "",
          subcategories: [],
        },
        {
          id: 22,
          name: "SubCategory B2",
          subcategories: [],
          image_Url: "",
        },
      ],
      image_Url: "",
    },
  ];

  const categoriesInitialState: ProductCategoriesState = {
    productCategories: initialCategories,
    isLoading: false,
    error: null,
  };

  const { getByText } = renderWithProviders(
    <ProductCategories onSelectEventHandler={() => {}} />,
    { preloadedState: { productCategories: categoriesInitialState } }
  );

  // Check if the subcomponents are rendered in the component
  initialCategories.forEach((category) => {
    expect(getByText(category.name)).toBeInTheDocument();
  });
});
