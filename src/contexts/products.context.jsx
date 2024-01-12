import { createContext, useState } from "react";
// import PRODUCTS from "../products-data.json";

export const ProductsContext = createContext({
    // selectedProduct : {},
    // setSelectedProduct : () => {}, data is lost upon page refresh
    products : [],
    setProducts : () => {}
});
 
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    // const [selectedProduct, setSelectedProduct] = useState({});
    const value = { products, setProducts };
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
} 