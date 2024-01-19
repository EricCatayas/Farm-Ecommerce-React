
export const flattenCategories = (categories) => {
  let flattenedArray = [];

  categories.forEach((category) => {
    flattenedArray.push(category);

    if (category.subCategories && category.subCategories.length > 0) {
      const subCategories = flattenCategories(category.subCategories);
      flattenedArray = flattenedArray.concat(subCategories);
    }
  });

  return flattenedArray;
};
