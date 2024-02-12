
export const NextButton = ({onClickEventHandler}) =>{
    return (
      <span className="material-icons" onClick={onClickEventHandler}>
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </span>
    );
}

export const PreviousButton = ({onClickEventHandler}) =>{
    return (
      <span className="material-icons" onClick={onClickEventHandler}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </span>
    );
}
