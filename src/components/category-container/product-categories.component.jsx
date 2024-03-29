import "./product-categories.styles.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SubCategories from "./product-subcategories.component.v2";
import CategoryMiniCard from "./category-mini-card.component";
import Spinner from "../spinner/spinner.component";

const ProductCategories = ({ onCategorySelectEvent }) => {  
  const { productCategories, isLoading, errors } = useSelector((state) => state.productCategories);
  const [clickedParentCategory, setClickedParentCategory] = useState(null);

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
      setClickedParentCategory(clickedParentCategory);
    }
  };

  const onCloseEventHandler = () => {
    setClickedParentCategory(null);
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
            {!isLoading && productCategories ? (
              productCategories.map((category) => (
                <CategoryMiniCard
                  key={category.id}
                  category={category}
                  onClickHandler={onClickEventHandler}
                />
              ))
            ) : (
              <Spinner />
            )}
          </ul>
          {clickedParentCategory ? (
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
