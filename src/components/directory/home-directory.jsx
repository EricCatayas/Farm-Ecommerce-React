import {Component} from 'react';
import ProductCategories from '../category-container/product_categories';
import ProductSearchFilter from '../search-filter/products-search-filter';
import ProductsList from '../products/products-list';
import GoogleMapLocations from '../map/google-map-locations';
import MainMenu from '../main-menu/main-menu';
//mock data
import categories_data from '../../categories-data.json';
import products_data from '../../products-data.json';

class HomeDirectory extends Component {
    constructor(){
        super();
        this.state = {
            products : products_data,
            product_categories : categories_data
          }
    }

    render(){

        return (
            <div className="home">
                <div className='container'>
                <MainMenu/>
                <ProductCategories categories={this.state.product_categories}/>
                <GoogleMapLocations/>
                <ProductSearchFilter/>
                <ProductsList products={this.state.products}/>
                </div>
            </div>
        );
    }
}

export default HomeDirectory;