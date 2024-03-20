export interface ProductCategory {
  id: number;
  name: string;
  image_Url: string;
  subcategories: ProductCategory[];
}