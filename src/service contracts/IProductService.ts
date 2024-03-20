import Product from "../models/Product";

export interface IProductService {
    fetchProductAsync: (productId: number) => Promise<Product>;
}