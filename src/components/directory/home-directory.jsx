import {Component} from 'react';
import ProductCategories from '../category-container/product-categories';
import ProductSearchFilter from '../search-filter/products-search-filter';
import ProductsList from '../products/products-list';
import GoogleMapLocations from '../map/google-map-locations';
import MainMenu from '../main-menu/main-menu';
//mock data
import { ProductsContext } from '../../contexts/products.context';
import categories_data from '../../categories-data.json';

class HomeDirectory extends Component {
    static contextType = ProductsContext;

    constructor(){
        super();
        this.state = {
            products: [],
            product_categories : categories_data
          }
    }

    componentDidMount(){
        const { products } = this.context;
        this.setState(()=>{
                return {
                    products : products
                }
            })
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