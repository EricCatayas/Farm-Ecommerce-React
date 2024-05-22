import { http, HttpResponse, delay } from "msw";
import { mockProduct } from "./mockProduct";
import dotenv from "dotenv";

dotenv.config();

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(
    `${process.env.REACT_APP_FARM_ECOMMERCE_URL}/api/v1/Products/Get`,
    async ({request}) => {

      const url = new URL(request.url);
      // Read the "id" URL query parameter using the "URLSearchParams" API.
      // Given "/product?id=1", "productId" will equal "1".
      const productId = url.searchParams.get("id");

      // Note that query parameters are potentially undefined.
      // Make sure to account for that in your handlers.
      
      if (productId && productId == mockProduct.id) {
        await delay(150);
        return HttpResponse.json(mockProduct);
      }
      else {
        return new HttpResponse(null, { status: 404 });
      }
    }
  ),
];