
import { DefaultBreadCrumb } from "../breadcrumb/breadcrumb";
import { DefaultAdvertisement } from "../../advertisement/advertisement";

const Product = ({product}) =>{

    return (    
      <section>
        <div className="container">
          <DefaultBreadCrumb
            page={"Product"}
            category={product.category_Name}
          />
          <section className="row product-details">
            <div className="col-dx-8">
                <div className="row m-b-20">
                    <div className="col-sm-6">
                        {/* Product Picture & Slider */}
                    </div>
                    <div className="col-sm-6">
                        {/* Product Information */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {/* Product Description */}                    
                    </div>
                </div>
            </div>
          </section> 

        <DefaultAdvertisement/>

        {/* Should be related to user's search */}
        <section className="row product-list">
        
        </section>       
        </div>
      </section>
    );
    
}

export default Product;