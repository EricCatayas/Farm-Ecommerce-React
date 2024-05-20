import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsStart, fetchFilteredProductsStart } from "../../redux/productsListPagination/productsListPagination.action";
import { createProductQueryParams } from '../../utils/productQueryParams';
import AdvertisementBox from "../advertisement/advertisement-box.component";
import GoogleMapLocations from '../google-map/google-map-locations.component';
import MainMenu from '../main-menu/main-menu.component';
import ProductCategories from '../category-container/product-categories.component';
import ProductSearchFilter from '../search-filter/products-search-filter.component';
import ProductsVerticalList from '../products/products-vertical-list.component';

const  HomeDirectory = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            try{
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
      const query = createProductQueryParams('category_Id', categoryId)
      dispatch(fetchFilteredProductsStart(query));
    }    

    return (
      <div className="home">
        <div className="container">
          <MainMenu />
          <ProductCategories onSelectEventHandler={categorySelectEventHandler}/>
          <GoogleMapLocations />
          <ProductSearchFilter />
          <ProductsVerticalList />
          <AdvertisementBox />
        </div>
      </div>
    );
    
}

export default HomeDirectory;