export enum PRODUCT_CATEGORIES_ACTION_TYPES  {
  FETCH_PRODUCT_CATEGORIES_START = "productCategory/FETCH_PRODUCT_CATEGORIES_START",
  FETCH_PRODUCT_CATEGORIES_SUCCESS = "productCategory/FETCH_PRODUCT_CATEGORIES_SUCCESS",
  FETCH_PRODUCT_CATEGORIES_FAILED = "productCategory/FETCH_PRODUCT_CATEGORIES_FAILED",
};

export interface ProductCategory {
  id: number;
  name: string;
  image_Url: string;
  subcategories: ProductCategory[];
}
