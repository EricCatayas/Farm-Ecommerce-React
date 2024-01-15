import { useState, useEffect, useContext } from 'react';
import ProductCategories from '../category-container/product-categories.component';
import ProductSearchFilter from '../search-filter/products-search-filter.component';
import ProductsContextVerticalList from '../products/products-context-list.component';
import { ProductsContext } from '../../contexts/products.context';
import GoogleMapLocations from '../map/google-map-locations.component';
import MainMenu from '../main-menu/main-menu.component';
import ProductsService from '../../services/productsService';

const  HomeDirectory = () => {
    const { setProducts } = useContext(ProductsContext);
    const productsService = new ProductsService();

    useEffect(()=>{
        const fetchData = async () => {
            var productsData = await productsService.fetchPaginatedProductsAsync(1, 4);
            setProducts(productsData.items);
        }

        fetchData();
    }, [])

    const categorySelectEventHandler = (event) => {
        console.log("Target: " + event.target);
    }
    
    console.log("HomeDirectory is rendered");

    return (
        <div className="home">
            <div className='container'>
            <MainMenu/>
            <ProductCategories onCategorySelectEvent={categorySelectEventHandler}/>
            <GoogleMapLocations/>
            <ProductSearchFilter/>
            <ProductsContextVerticalList/> 
            </div>
        </div>
    );
    
}

export default HomeDirectory;