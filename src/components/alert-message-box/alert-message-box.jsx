import NotificationType from "../../enums/NotificationType";
import "./alert-message-box.styles.scss";

const MessageBoxSuccess = ({ message }) => {
  return (
    <div className="alert-message-box">
      <div class="alert-message-box-success">
        <div className="info-tab tip-icon-success">
          <i></i>
        </div>
        <div className="tip-box-success">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const MessageBoxWarning = ({ message }) => {
  return (
    <div className="alert-message-box">
      <div class="alert-message-box-warning">
        <div className="info-tab tip-icon-warning">
          <i></i>
        </div>
        <div className="tip-box-warning">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const MessageBoxInfo = ({ message }) => {
  return (
    <div className="alert-message-box">
      <div class="alert-message-box-info">
        <div className="info-tab tip-icon-info">
          <i></i>
        </div>
        <div className="tip-box-info">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const MessageBoxDanger = ({ message }) => {
  return (
    <div className="alert-message-box">
      <div class="alert-message-box-danger">
        <div className="info-tab tip-icon-danger">
          <i></i>
        </div>
        <div className="tip-box-danger">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const MessageBox = ({ message, type }) => {

    if(type === NotificationType.success)
        return <MessageBoxSuccess message={message} />;
     
    if(type === NotificationType.info)
        return <MessageBoxInfo message={message} />

    if(type === NotificationType.warning)
        return <MessageBoxWarning message={message} />

    if(type === NotificationType.error)
        return <MessageBoxDanger message={message}/>

    throw new Error("Unknown notification type");
}

export default MessageBox;