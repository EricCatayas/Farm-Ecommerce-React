import Product from "../models/Product";

export function getPricePerUnit(product: Product):string {
    return `${product.price}/${product.quantity_Unit}`;
}