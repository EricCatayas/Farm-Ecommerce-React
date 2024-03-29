import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import ProductsListPagination from "../pagination/products-list-pagination.component";
import Spinner from "../spinner/spinner.component";
import "./products-vertical-list.styles.css";


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
                          <div className="col-9">
                            <div className="row">
                              <div className="col-9">
                                <b>{product.name}</b>
                              </div>
                              <div className="col-3">
                                {product.store.address.province}
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-9">{product.description}</div>
                              <div className="col-3">
                                Brgy. {product.store.address.barangay}
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-2">
                                <div className="row">Price</div>
                                <div className="row">{product.price}</div>
                              </div>
                              <div className="col-2">
                                <div className="row">Sold Per</div>
                                <div className="row">
                                  {product.per_Qty_Type}
                                </div>
                              </div>
                              <div className="col-2">
                                <div className="row">Stock Qty</div>
                                <div className="row">
                                  {product.qty_In_Stock}
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="row">Upload Date</div>
                                <div className="row">
                                  {product.images[0].upload_Date}
                                </div>
                              </div>
                              <div className="col-3">
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
