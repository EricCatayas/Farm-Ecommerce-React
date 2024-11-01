import Product from "../../src/models/Product";

export const mockProducts: Product[] = [
    {
    id: 1,
    name: "Mock Product 1 ",
    category_Id: 1,
    category_Name: "Mock Category 1",
    description: "Mock product 1 description",
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
        name: "Mock Store 1",
        description: "Mock Store 1 description",
        established_Date: "2024-01-01",
        seller_id: "seller123",
        images_Id: "1",
        address: {
        province: "Mock Province 1",
        barangay: "Mock Barangay 1",
        id: "1",
        street: "Mock Street 1",
        municipality: "Mock Municipality 1",
        postal_Code: "Mock Postal Code 1",
        },
    },
    discount: null,
    },
    {
    id: 2,
    name: "Mock Product 2 ",
    category_Id: 2,
    category_Name: "Mock Category 2",
    description: "Mock product 2 description",
    price: 200,
    is_Negotiable: true,
    quantity_Unit: "pieces",
    qty_In_Stock: 20,
    images: [
        {
        images_Id: "2",
        image_Url: "https://example.com/image.jpg",
        upload_Date: "2024-04-20",
        },
    ],
    store: {
        store_Id: 2,
        name: "Mock Store 2",
        description: "Mock Store 2 description",
        established_Date: "2024-01-01",
        seller_id: "seller123",
        images_Id: "2",
        address: {
        province: "Mock Province 2",
        barangay: "Mock Barangay 2",
        id: "2",
        street: "Mock Street 2",
        municipality: "Mock Municipality 2",
        postal_Code: "Mock Postal Code 2",
        },
    },
    discount: null,
    },
    {
    id: 3,
    name: "Mock Product 3 ",
    category_Id: 3,
    category_Name: "Mock Category 3",
    description: "Mock product 3 description",
    price: 300,
    is_Negotiable: true,
    quantity_Unit: "pieces",
    qty_In_Stock: 30,
    images: [
        {
        images_Id: "3",
        image_Url: "https://example.com/image.jpg",
        upload_Date: "2024-04-20",
        },
    ],
    store: {
        store_Id: 3,
        name: "Mock Store 3",
        description: "Mock Store 3 description",
        established_Date: "2024-01-01",
        seller_id: "seller123",
        images_Id: "3",
        address: {
        province: "Mock Province 3",
        barangay: "Mock Barangay 3",
        id: "3",
        street: "Mock Street 3",
        municipality: "Mock Municipality 3",
        postal_Code: "Mock Postal Code 3",
        },
    },
    discount: null,
    },

];
