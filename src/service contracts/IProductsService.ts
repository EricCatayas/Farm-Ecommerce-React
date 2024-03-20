import Product from "../models/Product";

export interface IProductsService {
  fetchFilteredProductsAsync: (query: string) => Promise<Product[]>;
  fetchPaginatedProductsAsync: (pageNumber: number, pageSize: number) => Promise<Product[]>;  
}