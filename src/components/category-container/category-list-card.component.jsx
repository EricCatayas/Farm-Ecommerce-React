import CategoryMiniCard from "./category-mini-card.component";
//import "./category-list-card.styles.css";


const CategoryListCard = ({ categories, onClickHandler}) => {
  return(
    <ul className="nav navbar-nav justify-content-evenly d-flex flex-row" onClick={onClickHandler}>
      {
        categories.map((category) => (
          <CategoryMiniCard
            key={category.id}
            category={category}
          />
        ))
      }
    </ul>
  )
}

export default CategoryListCard;
