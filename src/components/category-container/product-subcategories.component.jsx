import "./product-subcategories.styles.scss";

// Version 1
const SubCategories = ({
  category_id,
  subcategories,
  onSelectEvent,
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
              <li
                name="category_Id"
                value={category_id}
                onClick={onSelectEvent}
              >
                All
              </li>
              {subcategories
                ? subcategories.map((sub) => (
                    <li
                      name="category_Id"
                      key={sub.id}
                      value={sub.id}
                      onClick={onSelectEvent}
                    >
                      {sub.name}
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

export default SubCategories;
