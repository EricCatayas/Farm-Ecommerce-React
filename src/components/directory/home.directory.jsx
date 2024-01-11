import { useState, useEffect, useContext } from 'react';
import ProductCategories from '../category-container/product-categories.component';
import ProductSearchFilter from '../search-filter/products-search-filter.component';
import ProductsVerticalList from '../products/products-list.component';
import GoogleMapLocations from '../map/google-map-locations.component';
import MainMenu from '../main-menu/main-menu.component';
import ProductsService from '../../services/productsService';

const  HomeDirectory = () => {
    const { products, setProducts } = useContext([]);
    const productsService = new ProductsService();

    useEffect(()=>{
        const fetchData = async () => {
            var productsList = await productsService.fetchPaginatedProducts(1, 4);
            setProducts(productsList);
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
            <ProductsVerticalList products={products}/>
            </div>
        </div>
    );
    
}

export default HomeDirectory;