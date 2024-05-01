import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addErrorNotification } from "../redux/notification/notification.actions";

//TODO: Implement ref Agrionline.ph
const Store = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

      useEffect(() => {
        dispatch(addErrorNotification("Sorry, page is undergoing development"));
        navigate("/");
      }, [dispatch, navigate]);

    return <></>;
}

export default Store;