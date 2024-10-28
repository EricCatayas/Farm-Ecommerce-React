import { http, HttpResponse } from "msw";
import { mockProduct } from "./mockProduct";
import { mockProducts } from "./mockProducts"
import dotenv from "dotenv";

dotenv.config();

// We use msw to intercept the network request during the test,
// and return a custom response
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(
    `${process.env.REACT_APP_FARM_ECOMMERCE_URL}/api/v1/Products/Get`,
    ({ request, params, cookies }) => {
      const { Id } = request.url.searchParams;
      if (Id === mockProduct.Id) {
        return HttpResponse.json(mockProduct);
      }
      else {
        return HttpResponse.json(
          {
            message: "Error: Product does not exists.",
          },
          {
            status: 404,
            statusText: "Product does not exists.",
          }
        );
      }
    }
  ),
  http.get(
    `${process.env.REACT_APP_FARM_ECOMMERCE_URL}/api/v1/Products/GetPaginatedProducts`,
    ({ request, params, cookies }) => {

      //const { pageNumber, pageSize } = request.url.searchParams;

      return HttpResponse.json(mockProducts);
    }
  ),
];