import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNotification } from "../redux/notification/notification.actions";
import NotificationType from "../enums/NotificationType";

//TODO: Implement
const Store = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

      useEffect(() => {
        dispatch(
          addNotification(
            "Sorry, page is undergoing development",
            NotificationType.error
          )
        );
        navigate("/");
      }, [dispatch, navigate]);

    return <></>;
}

export default Store;