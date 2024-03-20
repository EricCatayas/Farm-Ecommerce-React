interface ProductCategory {
  id: number;
  name: string;
  image_Url: string;
  subcategories: ProductCategory[];
}

export default ProductCategory;