import Product from "../models/Product";
import { IProductService } from "../service contracts/IProductService";
import { defaultGetRequestAsync } from "../utils/getRequest.utils";

class ProductService implements IProductService {
  constructor() {}

  async fetchProductAsync(productID:number): Promise<Product> {
    return await defaultGetRequestAsync(
      `/api/v1/Products/Get?Id=${productID}`,
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}

export default ProductService;
