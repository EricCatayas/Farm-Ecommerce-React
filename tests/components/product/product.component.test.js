import { render, screen } from "@testing-library/react";
import Product from "../../../src/components/products/product-details.component";

describe("Product Component", () => {
  const product = {
    name: "Test Product",
    price: 100,
    quantity_Unit: "Piece",
    qty_In_Stock: 10,
    images: [{ upload_Date: "2024-03-25" }],
    store: {
      name: "Test Store",
      description: "Test description",
      established_Date: "2024-3-25",
      address: {
        province: "Test Province",
        barangay: "Test Barangay",
      },
    },
    description: "Test description",
  };

  it("renders product details correctly", () => {
    render(<Product product={product} />);

    // Check if product details are rendered correctly
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`Php${product.price}/${product.quantity_Unit}`)).toBeInTheDocument();
    expect(screen.getByText(product.qty_In_Stock)).toBeInTheDocument();
    expect(screen.getByText(product.store.address.province)).toBeInTheDocument();
    expect(screen.getByText(product.store.address.barangay)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });
});
