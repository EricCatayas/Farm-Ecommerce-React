import { defaultGetRequestAsync } from "../../utils/request.utils";

class ProductCategoriesService {
  constructor() {}

  async GetAllAsync() {

    return await defaultGetRequestAsync(
        "/api/v1/ProductCategories/GetAll",
        (data) => console.log(data),
        (error) => console.log(error)
    );      
  }
}

export default ProductCategoriesService;