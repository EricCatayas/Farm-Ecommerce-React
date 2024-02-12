import { setProducts, setErrors, setLoading } from "./productListSlice";
import { incrementPage, decrementPage } from "./productListPaginationSlice";
import { ProductsServicesFactory, ApiVersion } from "../../factories/productsServicesFactory";


export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { pageNumber, pageSize } = getState().productListPagination;
    const productsServicesFactory = new ProductsServicesFactory();  
    const productsService = productsServicesFactory.createProductsService(ApiVersion.V1);

    const data = await productsService.fetchPaginatedProductsAsync(pageNumber, pageSize);
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(setErrors([error.message]));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchNextPage = () => (dispatch) => {  
  dispatch(incrementPage());
  dispatch(fetchProducts());
};

export const fetchPreviousPage = () => (dispatch) => {
  dispatch(decrementPage());
  dispatch(fetchProducts());
};