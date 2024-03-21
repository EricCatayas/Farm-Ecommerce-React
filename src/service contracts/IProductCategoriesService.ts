import ProductCategory from "../models/ProductCategory";

export interface IProductCategoriesService{
    fetchAllAsync: () => Promise<ProductCategory[]>;
}