import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsStart, fetchFilteredProductsStart } from "../../redux/productsListPagination/productsListPagination.action";
import { fetchProductCategoriesStart } from '../../redux/productCategory/productCategories.action';
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
              dispatch(fetchProductCategoriesStart());
              dispatch(fetchProductsStart());
            }
            catch(error){
              console.log(error);
                //  TODO: Error handling
            }
        }
        fetchData();

    }, [])

    const categorySelectEventHandler = (categoryId) => {
      dispatch(fetchFilteredProductsStart(`category_Id=${categoryId}`));
    }
    
    console.log("HomeDirectory is rendered");

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <ProductCategories onSelectEventHandler={categorySelectEventHandler}/>
          <GoogleMapLocations />
          <ProductSearchFilter />
          <ProductsContextVerticalList />
          <AdvertisementBox />
        </div>
      </div>
    );
    
}

export default HomeDirectory;