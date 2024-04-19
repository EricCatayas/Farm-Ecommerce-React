type ProductQueryParams = {
  product_name: string | null;
  store_Id: number | null;
  category_Id: number | null;
  min_price: number | null;
  max_price: number | null;
  is_negotiable: boolean | null;
};

export default ProductQueryParams;