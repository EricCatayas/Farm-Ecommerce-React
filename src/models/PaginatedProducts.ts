import Product from "./Product";

interface PaginatedProducts {
  pageNumber: number,
  pageSize: number,
  nextPage: string,
  previousPage: string,
  items: Product[]
}

export default PaginatedProducts;