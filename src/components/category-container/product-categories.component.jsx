import "./product-categories.styles.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SubCategories from "./product-subcategories.component";
import CategoryMiniCard from "./category-mini-card.component";
import Spinner from "../spinner/spinner.component";

const ProductCategories = ({ onCategorySelectEvent }) => {  
  const { productCategories, isLoading, errors } = useSelector((state) => state.productCategories);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedParentCategory, setClickedParentCategory] = useState({});

  useEffect(() => {
    const fetchData = async () => {

    }
    //fetchData();
  }, []);

  const onClickEventHandler = (event) => {
    const id = event.target.dataset.id;
    const clickedParentCategory = productCategories.find((cat) => cat.id == id);

    console.log("category clicked event");

    if (clickedParentCategory != null) {
      setIsClicked(true);
      setClickedParentCategory(clickedParentCategory);
    }
  };

  const onCloseEventHandler = () => {
    setIsClicked(false);
  };

  const onCategorySelectEventHandler = (event) => {
    if (onCategorySelectEvent) 
      onCategorySelectEvent(event);
  };

  return (
    <section className="product-categories-container">
      <div className="row">
        <div className="col-xs-12">
          <ul className="nav navbar-nav justify-content-evenly d-flex flex-row">
            { !isLoading && productCategories ? 
            ( productCategories.map((category) => (
              <CategoryMiniCard
                key={category.id}
                category={category}
                onClickHandler={onClickEventHandler}
              />
            ))):(
              <Spinner/>
            )}
          </ul>
          {isClicked ? (
            <SubCategories
              category_id={clickedParentCategory.id}
              subcategories={clickedParentCategory.subCategories}
              onSelectEvent={onCategorySelectEventHandler}
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
