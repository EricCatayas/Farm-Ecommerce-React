import { ProductCategory } from "../redux/productCategory/productCategories.types";

export const flattenCategories = (categories: ProductCategory[]) => {
  let flattenedArray: ProductCategory[] = [];

  categories.forEach((category) => {
    flattenedArray.push(category);

    if (category.subcategories && category.subcategories.length > 0) {
      const subCategories = flattenCategories(category.subcategories);
      flattenedArray = flattenedArray.concat(subCategories);
    }
  });

  return flattenedArray;
};
