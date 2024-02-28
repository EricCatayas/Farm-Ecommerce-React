
export const fetchProductCategoriesAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const productCategoriesService = new ProductCategoriesService();
    const data = await productCategoriesService.fetchAllAsync();
    dispatch(setProductCategories(data));
  } catch (error) {
    dispatch(setErrors([error.message]));
  } finally {
    dispatch(setLoading(false));
  }
};