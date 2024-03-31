
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

export const PaginationListNumber = ({ page, isActive = false, onClickHandler}) => {
    return (
        <li key={page} className={`pagination__numbers ${ isActive ? "active" : "" }`} data-id={page} onClick={onClickHandler}>{page}</li>
    );
}


export const PaginationDots = () => {
  return <li className="pagination__dots">...</li>;
}