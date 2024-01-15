import { defaultGetRequestAsync } from "../utils/request.utils";

class ProductService {
  constructor() {}

  async fetchProductAsync(productID) {
    return await defaultGetRequestAsync(
      `/api/v1/Products/Get?Id=${productID}`,
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}

export default ProductService;
