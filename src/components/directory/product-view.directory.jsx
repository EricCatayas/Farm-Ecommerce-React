import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from "../breadcrumb/breadcrumb.component";
import { Advertisement } from "../advertisement/advertisement.component";
import { ProductsContext } from '../../contexts/products.context';
import ProductService from '../../services/productService';
import ProductsService from '../../services/productsService';
import MainMenu from '../main-menu/main-menu.component';
import Product from '../products/product.component';
import ProductsVerticalList from '../products/products-list.component';

const ProductViewDirectory = () => { 
    const { products, setProducts } = useState(ProductsContext);
    const [ product, setProduct ] = useState(null);
    const productService = new ProductService();
    const productsService = new ProductsService();
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const productData = await productService.fetchProduct(productID);

            if(productData){
              setProduct(productData);

              const filteredProducts = [];
              
              if(productData.category_Id)
                filteredProducts = await productsService.fetchFilteredProducts(`?category_Id=${productData.category_Id}`);
              else 
                filteredProducts = await productsService.fetchFilteredProducts();
              
              console.log("Filtered Products:" + JSON.stringify(filteredProducts));
              setProducts(filteredProducts);
            }
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
          <BreadCrumb items={breadcrumbItems} />
          {/* TODO: Mini Google Maps */}
          
          { product && <Product product={product} /> }
          <Advertisement />
          { products && <ProductsVerticalList products={products}/> }
          
        </div>
      </div>
    );
}

export default ProductViewDirectory;