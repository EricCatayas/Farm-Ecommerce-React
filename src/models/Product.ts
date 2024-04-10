import Discount from "./Discount";
import Image from "./Image"
import Store from "./Store"

interface Product {
  id: number;
  name: string;
  category_Id: number;
  category_Name: string;
  description: string;
  price: number;
  is_Negotiable: boolean;
  quantity_Unit: string;
  qty_In_Stock: number;
  images: Image[];
  store: Store;
  discount: Discount;
}

export default Product;
