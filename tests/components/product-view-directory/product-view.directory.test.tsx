import React from "react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../../test.utils";
import { BrowserRouter } from "react-router-dom";
import { mockProduct } from "../../mocks/mockProduct";
import ProductViewDirectory from "../../../src/components/directory/product-view.directory";
import ProductService from "../../../src/services/ProductService";


describe("ProductViewDirectory Component", () => {

  it("fetches product data using ProductService, and renders ProductDetails component", async () => {
    // Mock the ProductService.fetchProductAsync method
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
  
  it("fetches product on render, and renders ProductDetails component", async () => {

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