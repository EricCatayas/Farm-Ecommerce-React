import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from "../breadcrumb/breadcrumb.component";
import { Advertisement } from "../advertisement/advertisement.component";
import MainMenu from '../main-menu/main-menu.component';
import Product from '../products/product.component';
import ProductsContextVerticalList from '../products/products-vertical-list.component';
import { ApiVersion,ProductsServicesFactory } from '../../factories/productsServicesFactory';


const ProductViewDirectory = () => { 
    const { setProducts } = useSelector((state) => state.productList);
    const [ product, setProduct ] = useState(null);
    const dispatch = useDispatch();
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];
    const productsServicesFactory = new ProductsServicesFactory();  

    useEffect(() => {
        const fetchData = async () => {
          try {
            const productService = productsServicesFactory.createProductService(ApiVersion.V1);
            const productData = await productService.fetchProductAsync(productID);
            dispatch(setProduct(productData));

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
            // TODO: error handling
          }
        };

        fetchData();
    }, [productID]);        

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