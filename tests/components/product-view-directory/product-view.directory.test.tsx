import React from "react";
import "@testing-library/jest-dom";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test.utils";
import { mockProduct } from "../../mocks/mockProduct";
import ProductViewDirectory from "../../../src/components/directory/product-view.directory"

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

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<ProductViewDirectory/>);

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/loading.../i)).toBeInTheDocument();

  // after some time, the user should be received
  expect(await screen.findByText(`${mockProduct.name}`)).toBeInTheDocument();
  expect(screen.findByTestId("product-details-component")).toBeInTheDocument();
  expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
});
