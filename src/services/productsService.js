import { Exception } from "sass";
import { defaultGetRequestAsync } from "../utils/request.utils";

class ProductsService {
  constructor() {}

  async fetchFilteredProductsAsync(query) {
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

  async fetchPaginatedProductsAsync(pageNumber, pageSize) {
    
    if(!pageNumber || !pageSize)
      throw new Exception("Page number and page size must not be null.");

    const endpoint = `/api/v1/Products/GetPaginatedProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    try{
      const data = await defaultGetRequestAsync(
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
