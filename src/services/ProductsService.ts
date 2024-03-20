import { IProductsService } from "../service contracts/IProductsService";
import { defaultGetRequestAsync } from "../utils/getRequest.utils";
import Product from "../models/Product";
import PaginatedProducts from "../models/PaginatedProducts";

class ProductsService implements IProductsService {
  constructor() {}

  async fetchFilteredProductsAsync(query: string): Promise<Product[]> {
    var endpoint = "/api/v1/Products/GetFilteredProducts";

    if (query) {
      endpoint += query;
    }

    try{
      return await defaultGetRequestAsync(
        endpoint,
        (data) => console.log(data),
        (error) => console.log(error)
      );
      }
    catch(error){
      throw error;
    }
  }

  async fetchPaginatedProductsAsync(pageNumber: number , pageSize: number): Promise<Product[]> {
    
    if(!pageNumber || !pageSize)
      throw new Error("Page number and page size must not be null.");

    const endpoint = `/api/v1/Products/GetPaginatedProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    try{
      const data = await defaultGetRequestAsync<PaginatedProducts>(
        endpoint,
        (data) => console.log(data),
        (error) => console.log(error)
      );
      return data.items;
    }
    catch(error){
      throw error;
    }
  }
}

export default ProductsService;
