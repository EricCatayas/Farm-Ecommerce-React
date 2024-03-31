type ProductQueryParams = {
  product_name?: string,
  store_Id?: number,
  category_Id?: number,
  min_price?: number,
  max_price?: number,
  is_negotiable?: boolean
}

export default ProductQueryParams;