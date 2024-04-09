import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SubCategories from "./product-subcategories.component";
import CategoryListCard from "./category-list-card.component";
import Spinner from "../spinner/spinner.component";
import "./product-categories.styles.scss";

const ProductCategories = ({ onSelectEventHandler }) => {  
  const { productCategories, isLoading, errors } = useSelector((state) => state.productCategories);
  const [clickedParentCategory, setClickedParentCategory] = useState(null);

  const onClickEventHandler = (event) => {    
    const categoryId = event.target.dataset.id;
    console.log("On Category Clicked: " + categoryId);
    const clickedParentCategory = productCategories.find((cat) => cat.id == categoryId);

    if (clickedParentCategory != null) {
      setClickedParentCategory(clickedParentCategory);
    }
  };  

  const onCloseEventHandler = () => {
    setClickedParentCategory(null);
  };

  const onSubCategoryClickHandler = (categoryId) => {
    if (onSelectEventHandler) 
      onSelectEventHandler(categoryId);
  };

  return (
    <section className="product-categories-container">
      <div className="row">
        <div className="col-xs-12">
        {/* TODO: fix */}
          {!isLoading && productCategories ? (
            <CategoryListCard categories={productCategories} onClickHandler={onClickEventHandler}/>          
              ) : (
            <Spinner />
          )}          
          {clickedParentCategory ? (
            <SubCategories
              category_id={clickedParentCategory.id}
              subcategories={clickedParentCategory.subCategories}
              onClickHandler={onSubCategoryClickHandler}
              onCloseHandler={onCloseEventHandler}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
