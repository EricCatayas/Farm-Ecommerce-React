import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { ProductsContext } from "../../contexts/products.context";
import "./products-list.styles.css";

// TODO: useContext, selectedProduct 

function ProductsList({ products }) {
  const navigate = useNavigate();

  const onViewProductClickEvent = (event) => {
    console.log(event);
    const selectedProductId = event.target.value;
    navigate(`/product/${selectedProductId}`);
  };

  return (
    <section className="products-list-container my-5">
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  {" "}
                  {/* Add a unique key for each item */}
                  <td>
                    <div className="row">
                      <div className="col-3">
                        <img
                          src={product.images[0].image_Url}
                          alt={`Product: ${product.name}`}
                        />
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <div className="col-9">
                            <b>{product.name}</b>
                          </div>
                          <div className="col-3">{product.store.address.province}</div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-9">{product.description}</div>
                          <div className="col-3">Brgy. {product.store.address.barangay}</div>
                        </div>
                        <div className="row mt-1">
                          <div className="col-2">
                            <div className="row">Price</div>
                            <div className="row">{product.price}</div>
                          </div>
                          <div className="col-2">
                            <div className="row">Sold Per</div>
                            <div className="row">{product.per_qty_type}</div>
                          </div>
                          <div className="col-2">
                            <div className="row">Stock Qty</div>
                            <div className="row">{product.qty_in_stock}</div>
                          </div>
                          <div className="col-3">
                            <div className="row">Upload Date</div>
                            <div className="row">{product.images[0].upload_Date}</div>
                          </div>
                          <div className="col-3">
                            <button className="btn theme-color" value={product.id} onClick={onViewProductClickEvent}>View Advertisement</button>
                            <button className="btn btn-primary">Contact Seller</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
