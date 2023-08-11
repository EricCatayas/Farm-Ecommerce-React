import './mini_card.styles.css';

const Category_Mini_Card = ({category, onClickHandler}) => {
    
    return(
        <li key={category.id} className="mini-card align-items-center theme-color">
            <div className="category-mini-card-container" data-id={category.id} onClick={onClickHandler}>
                <div className="ico-container">
                    <img src={category.image_Url}/>
                </div>
                <div className='ico-text'>
                    {category.category_name}
                </div>
            </div>
        </li>     
    )
}

export default Category_Mini_Card;