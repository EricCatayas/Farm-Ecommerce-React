import "./mini_card.styles.css";

const CategoryMiniCard = ({ category, onClickHandler }) => {
  return (
    <li key={category.id} className="mini-card align-items-center theme-color">
      <div className="category-mini-card-container" data-id={category.id} onClick={onClickHandler}>
        <div className="ico-container">
          <img src={category.image_Url}/>
        </div>
        <div className="ico-text">{category.name}</div>
      </div>
    </li>
  );
};

export default CategoryMiniCard;
