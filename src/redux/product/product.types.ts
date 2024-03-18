import { Discount } from "../discount/discount.types";
import { Image } from "../image/image.types";
import { Store } from "../store/store.types";

export interface Product {
  id: number;
  name: string;
  category_Id: number;
  category_Name: string;
  description: string;
  price: number;
  is_Negotiable: boolean;
  per_Qty_Type: string;
  qty_In_Stock: number;
  images: Image[];
  store: Store;
  discount: Discount;
}
