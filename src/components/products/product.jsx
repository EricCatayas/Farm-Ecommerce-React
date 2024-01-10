
const Product = ({product}) =>{

    return (    
      <section cla> 
        <div className="container">
          
          <section className="row product-details">
            <div className="col-xs-8">
                <div className="row mb-20">
                    <div className="col-sm-12">
                        {/* Product Picture & Slider */}
                    </div>
                </div>
                <div className="row">
                    {/* Product Information */}
                    <div className="col-sm-6">
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Name:</span>
                          <span className="info-details-content">{product.product_name}</span>
                        </div>
                      </div>
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Price:</span>
                          <span className="info-details-content">{product.price}</span>
                        </div>
                      </div>
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Sold Per:</span>
                          <span className="info-details-content">{product.per_qty_type}</span>
                        </div>
                      </div>
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Quantity in Stock:</span>
                          <span className="info-details-content">{product.qty_in_stock}</span>
                        </div>
                      </div>
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Upload Date:</span>
                          <span className="info-details-content">{product.images[0].upload_Date}</span>
                        </div>
                      </div>
                    </div>
                    {/* Product Information II */}
                    <div className="col-sm-6">
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Region:</span>
                          <span className="info-details-content">{product.store.address.province}</span>
                        </div>
                      </div>
                      <div className="row mb-10">
                        <div className="col-xs-12">
                          <span className="info-details-label">Barangay:</span>
                          <span className="info-details-content">{product.store.address.barangay}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="row">
                    {/* Product Description */}     
                    <div className="col-sm-12">
                      <p>{product.description}</p>
                    </div>
                </div>
            </div>
          </section>                   
        </div>
      </section>
    );
    
}

export default Product;