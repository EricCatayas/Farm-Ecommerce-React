import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductsListPagination from "../pagination/products-list-pagination.component";
import Spinner from "../spinner/spinner.component";
import "./products-vertical-list.styles.css";


const ProductInfoItem = ({label, content}) => {
  return (
    <div className="col">
      <div className="row">{label}</div>
      <div className="row">{content}</div>
    </div>
  );
}

const ProductsVerticalList = () => {
  const { products, isLoading } = useSelector(
    (state) => state.productsListPagination
  );

  const navigate = useNavigate();

  const onViewProductClickEvent = (event) => {
    const selectedProductId = event.target.value;
    navigate(`/product/${selectedProductId}`);
  };

  return (
    <>
      <section className="products-list-container my-5">
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <tbody>
                {!isLoading && products && products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="row">
                          <div className="col-3">
                            <img
                              src={
                                product.images[0] && product.images[0].image_Url
                              }
                              alt={`Product: ${product.name}`}
                            />
                          </div>
                          <div className="col-6">
                            {/* First Row */}
                            <div className="row">
                              <div className="co">{product.name}</div>
                            </div>
                            {/* Second Row */}
                            <div className="row mt-1">
                              <div className="col-9">{product.description}</div>
                            </div>
                            {/* Third Row */}
                            <div className="row mt-1">
                              <ProductInfoItem
                                label="Price"
                                content={product.price}
                              />
                              <ProductInfoItem
                                label="Sold Per"
                                content={product.per_Qty_Type}
                              />
                              <ProductInfoItem
                                label="Stock Quantity"
                                content={product.qty_In_Stock}
                              />
                              <ProductInfoItem
                                label="Upload Date"
                                content={product.images[0].upload_Date}
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="row">
                              {product.store.address.province}
                            </div>
                            <div className="row">
                              Brgy. {product.store.address.barangay}
                            </div>
                            <div className="row">
                              <button
                                className="btn btn-theme btn-block small lowercase"
                                value={product.id}
                                onClick={onViewProductClickEvent}
                              >
                                View Advertisement
                              </button>
                              <button className="btn btn-primary btn-block small lowercase">
                                Contact Seller
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <Spinner text={"Loading Products..."} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <ProductsListPagination />
    </>
  );
}

export default ProductsVerticalList;
