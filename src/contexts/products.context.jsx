import { createContext, useState } from "react";
import PRODUCTS from "../products-data.json";

export const ProductsContext = createContext({
    //selectedProduct : null,
    //setSelectedProduct : () => {},
    products : [],
    setProducts : () => {}
});
 
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    //const [selectedProduct, setSelectedProduct] = useState();
    const value = { products, setProducts, selectedProduct, setSelectedProduct };
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
} 