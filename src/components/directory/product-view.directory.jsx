import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from "../breadcrumb/breadcrumb.component";
import { fetchFilteredProductsStart } from "../../redux/productsListPagination/productsListPagination.action";
import { createProductQueryParams } from "../../utils/productQueryParams";
import MainMenu from '../main-menu/main-menu.component';
import ProductDetails from '../products/product-details.component';
import ProductsVerticalList from '../products/products-vertical-list.component';
import AdvertisementBox from "../advertisement/advertisement-box.component";
import ProductService from "../../services/ProductService";

const ProductViewDirectory = () => { 
    const [ product, setProduct ] = useState(null);
    const dispatch = useDispatch();
    const params = useParams();
    const productID = params.id;
    const breadcrumbItems = product ? ["Products", product.category_Name] : ["Products"];

    useEffect(() => {
        const fetchData = async () => {
          try { 
            const productService = new ProductService();
            const productData = await productService.fetchProductAsync(productID);
            setProduct(productData);
            
            if(productData.category_Id){
              const query = createProductQueryParams('category_Id', productData.category_Id);
              dispatch(fetchFilteredProductsStart(query));
            }
            else {
              dispatch(fetchFilteredProductsStart());                        
            }
            
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
          { product && <ProductDetails product={product} /> }
          <AdvertisementBox />
          <ProductsVerticalList/>
          {/* TODO: Products List Menu Buttons */}
        </div>
      </div>
    );
}

export default ProductViewDirectory;