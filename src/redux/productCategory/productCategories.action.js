// REDUX TOOLKIT
import { setProductCategories, setErrors, setLoading } from "./productCategoriesSlice";
import ProductCategoriesService from "../../services/productCategoriesService";

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

// REDUX
import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import { createAction } from "../../utils/reducer.utils";

export const fetchCategoriesStart = () =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error);