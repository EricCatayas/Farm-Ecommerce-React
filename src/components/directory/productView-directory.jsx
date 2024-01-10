import { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { defaultGetRequestAsync } from '../../utils/form.utils';
import { DefaultBreadCrumb } from "../breadcrumb/breadcrumb";
import { DefaultAdvertisement } from "../../advertisement/advertisement";
import { ProductsContext } from '../../contexts/products.context';
import MainMenu from '../main-menu/main-menu';
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

    //TODO: GetRequest for Products for Product List

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <DefaultBreadCrumb page={"Product"} subpage={product.category_Name} />
          {/* TODO: Mini Google Maps */}
          <Product product={selectedProduct} />
          <DefaultAdvertisement />
          {/* TODO: ProductsList */}
          
        </div>
      </div>
    );
}

export default ProductViewDirectory;