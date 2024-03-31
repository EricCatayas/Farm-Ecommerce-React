import "./product-subcategories.styles.v2.scss";

// Version 2
const SubCategories = ({
  category_id,
  subcategories,
  onClickHandler,
  onCloseHandler,
}) => {
  return (
    <section className="subcategories-container">
      <button
        type="button"
        className="close btn-close"
        onClick={onCloseHandler}
      ></button>
      <div className="row">
        <div className="col-xs-12">
          <div className="float_center">
            <ul className="child">
              {/* Parent Category */}
              <li name="category_Id" key={category_id} value={category_id} onClick={() => onClickHandler(category_id)}>
                <div className="subcategory-item" >
                  <div className="category-name-container">All</div>                    
                </div>  
                
              </li>
              {/* Sub Categories */}
              {subcategories
                ? subcategories.map((sub) => (
                    <li name="category_Id" key={sub.id} value={sub.id} onClick={() => onClickHandler(sub.id)}>
                      <div className="subcategory-item">
                        <img className="sprite-category" src={sub.image_Url}/>
                        <div className="category-name-container">{sub.name}</div>
                      </div>  
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/*

}
*/

export default SubCategories;