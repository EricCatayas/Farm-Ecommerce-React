import { Exception } from "sass";
import ProductQueryParams from "../models/ProductQueryParams";

export function createProductQueryParam(
  fieldName: keyof ProductQueryParams,
  value: any
): ProductQueryParams {
  try {
    const result: ProductQueryParams = {
      product_name: null,
      description: null,
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

interface FieldValuePair {
  fieldName: keyof ProductQueryParams;
  value: any;
}

export function createProductQueryParams(
  pairs: FieldValuePair[]
): ProductQueryParams {
  try {
    const result: ProductQueryParams = {
      product_name: null,
      description: null,
      category_Id: null,
      min_price: null,
      max_price: null,
      is_negotiable: null,
      quantity_Unit: null,
      store_Id: null,
    };

    pairs.forEach((pair) => {
      result[pair.fieldName] = pair.value;
    });

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
