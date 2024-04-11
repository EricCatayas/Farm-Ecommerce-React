import { formatDate } from "../../utils/format.utils";
import { getPricePerUnit } from "../../utils/product.utils";
import ImageCarousel from "../carousel/image-carousel.component";
import "./product-details.styles.css";

const ProductInformation = ({ label, content }) => {
  return (
    <div className="col-xs-12">
      <span className="info-details-label">{label}:</span>
      <span className="info-details-content"> {content}</span>
    </div>
  );
};

const ProductDetails = ({product}) =>{

    return (
      <section className="">
        <div className="container">
          <section className="row product-details">
            <div className="col-xs-8">
              <div className="row mb-20">
                <div className="col-sm-12">
                  {/* ProductDetails Picture & Slider */}
                  <ImageCarousel images={product.images} />
                </div>
              </div>
              <div className="row">
                {/* ProductDetails Information */}
                <div className="col-sm-6">
                  <div className="row mb-10">
                    <ProductInformation label="Name" content={product.name} />
                  </div>
                  <div className="row mb-10">
                    <ProductInformation
                      label="Price"
                      content={`Php${getPricePerUnit(product)}`}
                    />
                  </div>
                  <div className="row mb-10">
                    <ProductInformation
                      label="Stock Quantity"
                      content={product.qty_In_Stock}
                    />
                  </div>
                  <div className="row mb-10">
                    <ProductInformation
                      label="Upload Date"
                      content={
                        product.images[0] &&
                        formatDate(product.images[0].upload_Date)
                      }
                    />
                  </div>
                </div>
                {/* ProductDetails Information II */}
                <div className="col-sm-6">
                  <div className="row mb-10">
                    <ProductInformation
                      label="Region"
                      content={product.store.address.province}
                    />
                  </div>
                  <div className="row mb-10">
                    <ProductInformation
                      label="Barangay"
                      content={product.store.address.barangay}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* ProductDetails Description */}
                <div className="description-container">
                  {product.description}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );   
}

export default ProductDetails;