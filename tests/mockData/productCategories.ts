import ProductCategory from "../../src/models/ProductCategory";

export const mockCategories: ProductCategory[] = [
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
