import { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import MainMenu from '../main-menu/main-menu';
import { defaultGetRequestAsync } from '../../utils/form.utils';
import { ProductsContext } from '../../contexts/products.context';
import Product from '../products/product';
import ProductsList from '../products/products-list';

const ProductViewDirectory = () => { 
    const location = useLocation();
    const [ selectedProduct, setSelectedProduct ] = useState();
    const queryParams = new URLSearchParams(location.search);

    const productId = queryParams.get("id");
    console.log("ProductViewDirectory");
    console.log(`Product Id: ${productId}`);

    useEffect(async() => {
        try{
            var product = await defaultGetRequestAsync(
                `/api/v1/Product/Get?Id=${productId}`,
                (data) => console.log(data),
                (error) => console.log(error)
            )
            setSelectedProduct(product);

        } catch(error){
            console.log(error);
        }        
    }, []);

    return(
        <div className="home">
            <div className='container'>
                <MainMenu/>
                <Product product={selectedProduct}/>
                {/* <ProductsList products={}/> */}
            </div>
        </div>
        
    )
}

export default ProductViewDirectory;