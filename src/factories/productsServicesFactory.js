import ProductService from "../services/ProductService"
import ProductsService from "../services/ProductsService";

export const ApiVersion = {
    V1:"V1",
    V2:"V2"
}

export class ProductsServicesFactory {
  createProductService(version) {
    switch(version){
        case ApiVersion.V1:
            return new ProductService();
        default:
            throw new Error("Error: Invalid api version type.")
    }
  }

  createProductsService(version){
    switch(version){
        case ApiVersion.V1:
            return new ProductsService();
        default:
            throw new Error("Error: Invalid api version type.")
    }
  }
}