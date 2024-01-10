import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultGetRequestAsync } from '../../utils/form.utils';
import { BootstrapBreadCrumb } from "../breadcrumb/breadcrumb";
import { DefaultAdvertisement } from "../../advertisement/advertisement";
import { ProductsContext } from '../../contexts/products.context';
import MainMenu from '../main-menu/main-menu';
import Product from '../products/product';
import ProductsList from '../products/products-list';

const ProductViewDirectory = () => { 
    const [ selectedProduct, setSelectedProduct ] = useState();

    const params = useParams();
    const  productID = params.id;

    console.log("ProductViewDirectory");
    console.log(`Product Id: ${productID}`);

    useEffect(async() => {
        try{
            var product = await defaultGetRequestAsync(
                `/api/v1/Product/Get?Id=${productID}`,
                (data) => console.log(data),
                (error) => console.log(error)
            )
            setSelectedProduct(product);

        } catch(error){
            console.log(error);
        }        
    }, []);

    //TODO: GetRequest of Products for Product List

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <BootstrapBreadCrumb items={["Products", selectedProduct.category_Name]} />
          {/* TODO: Mini Google Maps */}
          <Product product={selectedProduct} />
          <DefaultAdvertisement />
          {/* TODO: ProductsList */}
          
        </div>
      </div>
    );
}

export default ProductViewDirectory;