import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../test.utils";
import { server } from "../../mocks/server";
import { BrowserRouter } from "react-router-dom";
import ProductViewDirectory from "../../../src/components/directory/product-view.directory";

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("renders productViewDirectory and subcomponents", async () => {
  const { findByTestId} = renderWithProviders(
    <BrowserRouter>
      <ProductViewDirectory />
    </BrowserRouter>
  );

  expect(await findByTestId("main-menu")).toBeInTheDocument();
});
