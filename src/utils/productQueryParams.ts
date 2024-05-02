import { Exception } from "sass";
import ProductQueryParams from "../models/ProductQueryParams";

export function createProductQueryParams(fieldName: keyof ProductQueryParams, value: any
): ProductQueryParams {
  try {
    const result: ProductQueryParams = {
      product_name: null,
      category_Id: null,
      min_price: null,
      max_price: null,
      is_negotiable: null,
      quantity_Unit: null,
      store_Id: null,
    };
    result[fieldName] = value;
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
}