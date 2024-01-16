import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from "../breadcrumb/breadcrumb.component";
import { Advertisement } from "../advertisement/advertisement.component";
import { ProductsContext } from '../../contexts/products.context';
import ProductService from '../../services/productService';
import ProductsService from '../../services/productsService';
import MainMenu from '../main-menu/main-menu.component';
import Product from '../products/product.component';
import ProductsContextVerticalList from '../products/products-context-list.component';
import { ApiVersion,ProductsServicesFactory } from '../../factories/productsServicesFactory';


const ProductViewDirectory = () => { 
    const { setProducts } = useContext(ProductsContext);
    const [ product, setProduct ] = useState(null);
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];
    const productsServicesFactory = new ProductsServicesFactory();    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const productService = productsServicesFactory.createProductService(ApiVersion.V1);
            const productData = await productService.fetchProductAsync(productID);
            setProduct(productData);

            let filteredProducts = [];
            const productsService = productsServicesFactory.createProductsService(ApiVersion.V1);
            
            if(productData.category_Id)
              filteredProducts = await productsService.fetchFilteredProductsAsync(`?category_Id=${productData.category_Id}`);
            else 
              filteredProducts = await productsService.fetchFilteredProductsAsync();
            
            console.log("Filtered Products:" + JSON.stringify(filteredProducts));
            setProducts(filteredProducts);
            
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
    }, []);        

    return (
      <div className="product-view">
        <div className="container">
          <MainMenu/>
          <BreadCrumb items={breadcrumbItems} />
          {/* TODO: Mini Google Maps */}          
          { product && <Product product={product} /> }
          <Advertisement />
          <ProductsContextVerticalList/>
          {/* TODO: Products List Menu Buttons */}
        </div>
      </div>
    );
}

export default ProductViewDirectory;