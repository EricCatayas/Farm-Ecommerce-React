import Product from "../../src/models/Product";

export const mockProduct: Product = {
  id: 1,
  name: "Mock Product",
  category_Id: 1,
  category_Name: "Mock Category",
  description: "Mock product description",
  price: 100,
  is_Negotiable: true,
  quantity_Unit: "pieces",
  qty_In_Stock: 10,
  images: [
    {
      images_Id: "1",
      image_Url: "https://example.com/image.jpg",
      upload_Date: "2024-04-20",
    },
  ],
  store: {
      store_Id: 1,
      name: "Mock Store",
      description: "Mock store description",
      established_Date: "2024-01-01",
      seller_id: "seller123",
      images_Id: "1",
      address: {
          province: "Mock Province",
          barangay: "Mock Barangay",
          id: "1",
          street: "Mock Street",
          municipality: "Mock Municipality",
          postal_Code: "Mock Postal Code"
      },
  },
  discount: null    
}