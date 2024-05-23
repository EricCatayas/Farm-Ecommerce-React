import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../test.utils";
import { server } from "../../mocks/server";
import { BrowserRouter } from "react-router-dom";
import { mockProduct } from "../../mocks/mockProduct";
import ProductViewDirectory from "../../../src/components/directory/product-view.directory";
import ProductService from "../../../src/services/ProductService";

// Mock the ProductService class
// jest.mock('../../../services/ProductService');

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("ProductViewDirectory Component", () => {

  it("fetches product data, and renders ProductDetails component", async () => {

    // Mock the fetchProductAsync method
    const fetchProductAsyncMock = jest
      .spyOn(ProductService.prototype, "fetchProductAsync")
      .mockResolvedValue(mockProduct);

    const { findByTestId } = renderWithProviders(
      <BrowserRouter>
        <ProductViewDirectory />
      </BrowserRouter>
    );

    expect(await findByTestId("product-details-component")).toBeInTheDocument();
  });

  it("renders component and subcomponents", async () => {

    // Mock the fetchProductAsync method
    const fetchProductAsyncMock = jest
      .spyOn(ProductService.prototype, "fetchProductAsync")
      .mockResolvedValue(mockProduct);

    const { findByTestId } = renderWithProviders(
      <BrowserRouter>
        <ProductViewDirectory />
      </BrowserRouter>
    );

    expect(await findByTestId("main-menu")).toBeInTheDocument();
    expect(await findByTestId("breadcrumb")).toBeInTheDocument();
    expect(await findByTestId("products-list-container")).toBeInTheDocument();
  });

});