import { createContext, useState } from "react";
import { defaultGetRequestAsync } from "../utils/form.utils";

//We could do this for redux

export const ProductCategoriesContext = createContext({
  productCategories: [],
  setProductCategories: () => {},
});

export const ProductCategoriesProvider = ({ children }) => {
  const [productCategories, setProductCategories] = useState([]);
  const value = { productCategories, setProductCategories };
  return (
    <ProductCategoriesContext.Provider value={value}>
      {children}
    </ProductCategoriesContext.Provider>
  );
};
