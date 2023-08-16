import {Component} from 'react';
import MainMenu from '../main-menu/main-menu';
import { ProductsContext } from '../../contexts/products.context';
import Product from '../products/product';
import ProductsList from '../products/products-list';

class ProductDirectory extends Component {
    static contextType = ProductsContext;

    constructor(){
        super();
    }


    render(){
        const productId = 2;

        return (
            <div className="home">
                <div className='container'>
                    <MainMenu/>
                    <Product productId={productId}/>
                    {/* <ProductsList products={}/> */}
                </div>
            </div>
        );
    }
}

export default ProductDirectory;