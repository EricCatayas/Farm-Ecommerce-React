
// TODO
const AdvertisementBox = () => {
    return (
      <div className="alert alert-info add-ad-info">
        <div className="row">
          <div className="col-xs-8">
            <h4></h4>
            <h4>
              Would you like to buy or to sell the product you are searching
              for?
            </h4>
            <h4>Post a SALE or PURCHASE advertisement</h4>
          </div>
          <div className="col-xs-4">
            <a
              href="/pub/new"
              className="btn btn-primary btn-block h-100-p   m-t-12"
            >
              ADD AN ADVERTISEMENT FOR FREE
            </a>
          </div>
        </div>
      </div>
    );
}

export default AdvertisementBox;