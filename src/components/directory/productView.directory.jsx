import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { defaultGetRequestAsync } from '../../utils/form.utils';
import { BootstrapBreadCrumb } from "../breadcrumb/breadcrumb";
import { DefaultAdvertisement } from "../../advertisement/advertisement";
import { ProductsContext } from '../../contexts/products.context';
import MainMenu from '../main-menu/main-menu';
import Product from '../products/product';
import ProductsVerticalList from '../products/productsList.component';

const ProductViewDirectory = () => { 
    const { products, setProducts } = useState(ProductsContext);
    const [ product, setProduct ] = useState(null);
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];

    // TODO: figure out a more efficient or reliable shit
    useEffect(() => {
        const fetchData = async () => {
          try {
            const productData = await fetchSelectedProduct();

            if(productData){
              console.log("Product data:" + JSON.stringify(productData));
              setProduct(productData);

              const filteredProducts = await GetProductsForList(productData);
              
              console.log("Filtered Products:" + JSON.stringify(filteredProducts));
              setProducts(filteredProducts);
            }
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
    }, []);

    async function fetchSelectedProduct(){
      return await defaultGetRequestAsync(
        `/api/v1/Products/Get?Id=${productID}`,
        (data) => console.log(data),
        (error) => console.log(error)
      );
    }
    async function GetProductsForList(product){
      const endpoint = "/api/v1/Products/GetFilteredProducts";
      if(product.category_Id)
        endpoint += `?category_Id=${product.category_Id}`;
      return await defaultGetRequestAsync(
                endpoint,
                (data) => console.log(data),
                (error) => console.log(error)
      );
    }

    //TODO: GetRequest of Products for Product List

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <BootstrapBreadCrumb items={breadcrumbItems} />
          {/* TODO: Mini Google Maps */}
          
          { product && <Product product={product} /> }
          <DefaultAdvertisement />
          { products && <ProductsVerticalList products={products}/> }
          
        </div>
      </div>
    );
}

export default ProductViewDirectory;