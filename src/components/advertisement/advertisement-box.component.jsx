import { useNavigate } from "react-router-dom";


const AdvertisementBox = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/product/create");
  }

  return (
    <div className="alert alert-info" style={{ zIndex: 10 }}>
      <div className="row">
        <div className="col-xs-8">
          <h4>Would you like to advertise your products?</h4>
        </div>
        <div className="col-xs-4">
          <a className="btn btn-theme mt-12" onClick={handleClick}>
            ADD AN ADVERTISEMENT FOR FREE
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBox;
