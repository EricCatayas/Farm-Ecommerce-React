import { Exception } from "sass";
import ProductQueryParams from "../models/ProductQueryParams";

export function createProductQueryParams(fieldName: keyof ProductQueryParams, value: any
): ProductQueryParams {
  try {
    const result: ProductQueryParams = {};
    result[fieldName] = value;
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
}