import { IProductCategoriesService } from "../service contracts/IProductCategoriesService";
import { defaultGetRequestAsync } from "../utils/getRequest.utils";
import ProductCategory from "../models/ProductCategory";

class ProductCategoriesService implements IProductCategoriesService{
  constructor() {}

  async fetchAllAsync() : Promise<ProductCategory[]> {

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