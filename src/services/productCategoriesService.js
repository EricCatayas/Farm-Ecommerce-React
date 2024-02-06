import { defaultGetRequestAsync } from "../utils/request.utils";

class ProductCategoriesService {
  constructor() {}

  async fetchAllAsync() {

    try
    {
      return await defaultGetRequestAsync(
          "/api/v1/ProductCategories/GetAll",
          (data) => console.log(data),
          (error) => console.log(error)
      );      
    }
    catch(error){
      throw error;      
    }
  }
}

export default ProductCategoriesService;