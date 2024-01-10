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
    const { products, setProducts } = useState(ProductsContext);
    const [ product, setProduct ] = useState(null);
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];

    // TODO: figure out a more efficient or reliable shit
    useEffect(() => {
        const fetchData = async () => {
          try {
            const productData = await defaultGetRequestAsync(
              `/api/v1/Products?id=${productID}`,
              (data) => console.log(data),
              (error) => console.log(error)
            );
            setProduct(productData);

            const filteredProducts = await defaultGetRequestAsync(
              `/api/v1/Products/GetFilteredProducts?category_Id=${productData.category_Id}`,
              (data) => console.log(data),
              (error) => console.log(error)
            );
            setProducts(filteredProducts);
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
    }, []);

    //TODO: GetRequest of Products for Product List

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <BootstrapBreadCrumb items={breadcrumbItems} />
          {/* TODO: Mini Google Maps */}
          
          { product && <Product product={product} /> }
          <DefaultAdvertisement />
          { products && <ProductsList products={products}/> }
          
        </div>
      </div>
    );
}

export default ProductViewDirectory;