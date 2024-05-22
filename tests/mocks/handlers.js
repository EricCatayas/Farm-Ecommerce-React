import { http, HttpResponse, delay } from "msw";
import { mockProduct } from "./mockProduct";
import dotenv from "dotenv";

dotenv.config();

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(
    `${process.env.REACT_APP_FARM_ECOMMERCE_URL}/api/v1/Products/Get?Id=${mockProduct.id}`,
    async () => {
      await delay(150);
      return HttpResponse.json(mockProduct);
    }
  ),
];