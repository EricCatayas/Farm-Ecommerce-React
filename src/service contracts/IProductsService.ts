import Product from "../models/Product";
import ProductQueryParams from "../models/ProductQueryParams";

export interface IProductsService {
  fetchFilteredProductsAsync: (queryParams: ProductQueryParams) => Promise<Product[]>;
  fetchPaginatedProductsAsync: (pageNumber: number, pageSize: number) => Promise<Product[]>;  
}