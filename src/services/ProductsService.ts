import { IProductsService } from "../service contracts/IProductsService";
import { defaultGetRequestAsync } from "../utils/getRequest.utils";
import ProductQueryParams from "../models/ProductQueryParams";
import Product from "../models/Product";
import PaginatedProducts from "../models/PaginatedProducts";

class ProductsService implements IProductsService {
  constructor() {}

  async fetchFilteredProductsAsync(
    queryParams: ProductQueryParams
  ): Promise<Product[]> {
    var endpoint = "/api/v1/Products/GetFilteredProducts";
    let queryString = "";

    // Build the query string
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined && value !== null) {
        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
          value
        )}&`;
      }
    }

    // Remove trailing '&' if there are query parameters
    queryString = queryString.replace(/&$/, "");

    try {
      const url = queryString ? `${endpoint}?${queryString}` : endpoint;
      
      return await defaultGetRequestAsync(
        url,
        (data) => console.log(data),
        (error) => console.log(error)
      );
    } catch (error) {
      throw error;
    }
  }

  async fetchPaginatedProductsAsync(
    pageNumber: number,
    pageSize: number
  ): Promise<Product[]> {
    if (!pageNumber || !pageSize)
      throw new Error("Page number and page size must not be null.");

    const endpoint = `/api/v1/Products/GetPaginatedProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    try {
      const data = await defaultGetRequestAsync<PaginatedProducts>(
        endpoint,
        (data) => console.log(data),
        (error) => console.log(error)
      );
      return data.items;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
