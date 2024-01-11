import { useState, useEffect, useContext } from 'react';
import ProductCategories from '../category-container/product-categories';
import ProductSearchFilter from '../search-filter/products-search-filter';
import ProductsVerticalList from '../products/productsList.component';
import GoogleMapLocations from '../map/google-map-locations';
import MainMenu from '../main-menu/main-menu';
//mock data
import { ProductsContext } from '../../contexts/products.context';

import productsList from '../../products-data.json';

const  HomeDirectory = () => {

    const { products, setProducts } = useContext(ProductsContext);

    useEffect(()=>{
        // TODO: Call server side
        setProducts(productsList);
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