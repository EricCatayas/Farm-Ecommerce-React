import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from "../../redux/product/productListPagination.actions";
import { fetchProductCategoriesAsync } from '../../redux/productCategory/productCategories.action';
import AboutContactPanel from '../about/about-contact-panel.component';
import AdvertisementBox from "../advertisement/advertisement-box.component";
import GoogleMapLocations from '../map/google-map-locations.component';
import MainMenu from '../main-menu/main-menu.component';
import ProductCategories from '../category-container/product-categories.component';
import ProductSearchFilter from '../search-filter/products-search-filter.component';
import ProductsContextVerticalList from '../products/products-vertical-list.component';

const  HomeDirectory = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            try{
                dispatch(fetchProductsAsync());
                dispatch(fetchProductCategoriesAsync());
            }
            catch{
                //  TODO: Error handling
            }
        }
        fetchData();

    }, [])

    const categorySelectEventHandler = (event) => {
        console.log("Target: " + event.target);
    }
    
    console.log("HomeDirectory is rendered");

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <ProductCategories onCategorySelectEvent={categorySelectEventHandler}/>
          <GoogleMapLocations />
          <ProductSearchFilter />
          <ProductsContextVerticalList />
          <AdvertisementBox />
        </div>
      </div>
    );
    
}

export default HomeDirectory;