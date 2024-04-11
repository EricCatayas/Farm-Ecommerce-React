import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, truncateString } from "../../utils/format.utils";
import { getPricePerUnit } from "../../utils/product.utils";
import { LabelContentItem, SingleRowContent } from "./product-info-item";
import ProductsListPagination from "../pagination/products-list-pagination.component";
import Spinner from "../spinner/spinner.component";
import "./products-vertical-list.styles.css";


const ProductsVerticalList = () => {
  const [descriptionLength, setDescriptionLength ] = useState(60);
  const { products, isLoading } = useSelector(
    (state) => state.productsListPagination
  );

  const navigate = useNavigate();

  const onViewProductHandler = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <section id="products-list-container" className="my-5">
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <tbody>
                {!isLoading && products && products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="row">
                          {/* Picture */}
                          <div className="col col-md-3">
                            <img
                              src={
                                product.images[0] && product.images[0].image_Url
                              }
                              alt={`Product: ${product.name}`}
                            />
                            <div className="mt-1 text-center mobile-show">
                              <SingleRowContent content={product.name} />
                            </div>
                          </div>

                          {/* Middle */}
                          <div className="col col-md-9">
                            <div className="row">
                              <div className="col-md-8 col-sm-12">
                                <div className="mt-1 mobile-hide">
                                  <SingleRowContent content={product.name} />
                                  <SingleRowContent
                                    content={truncateString(
                                      product.description,
                                      descriptionLength
                                    )}
                                  />
                                </div>
                                <div className="row mt-1">
                                  <LabelContentItem
                                    label="Price"
                                    content={getPricePerUnit(product)}
                                  />
                                  <LabelContentItem
                                    label="Stock Quantity"
                                    content={`Php${product.qty_In_Stock}`}
                                  />
                                  <LabelContentItem
                                    label="Upload Date"
                                    content={formatDate(
                                      product.images[0].upload_Date
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="col-md-4 col-sm-12">
                                <div className="mobile-hide">
                                  <SingleRowContent
                                    content={product.store.address.province}
                                  />
                                  <SingleRowContent
                                    content={product.store.address.barangay}
                                  />
                                  <div className="row">
                                    <button className="btn btn-theme btn-block small lowercase mt-2" onClick={() => onViewProductHandler(product.id)}>
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                      View Advertisement
                                    </button>
                                    <button className="btn btn-primary btn-block small lowercase mt-2">
                                      <i className="fa fa-comment-o" aria-hidden="true" style={{transform: 'scaleX(-1)'}}></i>
                                      Contact Seller
                                    </button>
                                  </div>
                                </div>

                                <div className="row row-cols-2 mobile-show">
                                  <div className="col">
                                    <button className="btn btn-theme btn-block small lowercase my-2" onClick={() => onViewProductHandler(product.id)}>
                                      View
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button className="btn btn-primary btn-block small lowercase my-2">
                                      Contact
                                    </button>
                                  </div>
                                </div>
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
