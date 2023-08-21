import './product-categories.styles.scss';
import { Component } from 'react';
import SubCategories from './product-subcategories';
import CategoryMiniCard from './category-mini-card';
import categories_data from '../../categories-data.json';

class ProductCategories extends Component {
    
    // TODO use ProductCategoriesContext 
    constructor({onCategorySelectEvent}){
        super();
        this.state = {
            categories : categories_data, //TODO
            is_clicked: false,
            clickedParentCategory : {},
            onCategorySelectEvent
        }
    }

    
    onClickEvent = (event) => {
        const id = event.currentTarget.dataset.id;
        const clickedParentCategory = this.state.categories.find(cat => cat.id == id);
        if(clickedParentCategory != null){
            this.setState(()=>{
                return{
                    is_clicked :true,
                    clickedParentCategory
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

    onCategorySelectEventHandler = (event) => {
        const { onCategorySelectEvent } = this.state;
        if(onCategorySelectEvent)
            onCategorySelectEvent(event);
    }
    
    render(){
        const {categories, is_clicked, clickedParentCategory} = this.state;
        const {onClickEvent, onCloseEvent, onCategorySelectEventHandler} = this;
        
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
                            <SubCategories category_id={clickedParentCategory.id} subcategories={clickedParentCategory.subcategories} onSelectEvent={onCategorySelectEventHandler} onCloseHandler={onCloseEvent}/>    :
                            ""                                             
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductCategories;