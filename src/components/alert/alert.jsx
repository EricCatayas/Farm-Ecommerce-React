import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../../redux/notification/notification.actions";
import MessageBox from "../alert-message-box/alert-message-box";
import "./alert.styles.css";


const Alert = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.notification);

  useEffect(() => {
    if(message){
      setTimeout(() => {
        dispatch(clearNotifications());
      }, 3000);
    }
  }, [message])

  if(message)
    return (
      <section className="alert position-fixed top-5 start-50 translate-middle">
          <div className="d-inline text-center">
            <div className="row">
              <div className="col col-xs-12">
                <MessageBox message={message} type={type} />
              </div>
            </div>
          </div>
      </section>
    );
};

export default Alert;
