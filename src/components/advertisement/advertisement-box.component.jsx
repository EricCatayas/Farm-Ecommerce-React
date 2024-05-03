import "./advertisement-box.styles.css";

const AdvertisementBox = () => {
    return (
      <div className="alert alert-info advertisement-box">
        <div className="row">
          <div className="col-xs-8">
            <h4>
              Would you like to advertise your products?
            </h4>
          </div>
          <div className="col-xs-4">
            <a href="/product/create" className="btn btn-theme mt-12">
              ADD AN ADVERTISEMENT FOR FREE
            </a>
          </div>
        </div>
      </div>
    );
}

export default AdvertisementBox;