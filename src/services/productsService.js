import { Exception } from "sass";
import { defaultGetRequestAsync } from "../utils/request.utils";

class ProductsService {
  constructor() {}

  async fetchFilteredProducts(query) {
    const endpoint = "/api/v1/Products/GetFilteredProducts";

    if (query) {
      endpoint += query;
    }

    return await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  async fetchPaginatedProducts(pageNumber, pageSize) {
    
    if(!pageNumber || !pageSize)
      throw new Exception("Page number and page size must not be null.");

    const endpoint = `/api/v1/Products/GetPaginatedProducts?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    return await defaultGetRequestAsync(
      endpoint,
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}

export default ProductsService;
