import './product_categories.styles.scss';
import { Component } from 'react';
import SubCategories from './product_subcategories';
import CategoryMiniCard from './categoryMiniCard';

class ProductCategories extends Component {
    constructor({categories}){
        super();
        this.state = {
            categories,
            is_clicked: false,
            clicked_category : {}
        }
    }

    
    onClickEvent = (event) => {
        const id = event.currentTarget.dataset.id;
        const clicked_category = this.state.categories.find(cat => cat.id == id);
        if(clicked_category != null){
            this.setState(()=>{
                return{
                    is_clicked :true,
                    clicked_category
                }
            })
        }
    }
    onCloseEvent = (event) => {
        this.setState(()=>{
            return{
                is_clicked :false,
            }
        })
    }
    
    render(){
        const {categories, is_clicked, clicked_category} = this.state;
        const {onClickEvent, onCloseEvent} = this;
        
        console.log(categories);
        
        return(
            <section className='product-categories-container'>
                <div className="row">
                    <div className="col-xs-12">
                        {/* <div className="collapse navbar-collapse js-navbar-collapse"> */}
                            <ul className="nav navbar-nav justify-content-evenly d-flex flex-row">
                                {
                                categories.map((category) => (
                                    <CategoryMiniCard key={category.id} category={category} onClickHandler={onClickEvent}/>                           
                                ))
                                }
                            </ul>
                        {/* </div> */}
                        {
                            is_clicked ?
                            <SubCategories category_id={clicked_category.id} subcategories={clicked_category.subcategories} onCloseHandler={onCloseEvent}/>    :
                            ""                                             
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductCategories;