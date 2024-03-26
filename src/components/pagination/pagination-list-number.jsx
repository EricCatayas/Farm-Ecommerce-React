const PaginationListNumber = ({ page, isActive = false, onClickHandler}) => {
    return (
        <li key={page} className={`pagination__numbers ${ isActive ? "active" : "" }`} data-id={page} onClick={onClickHandler}>{page}</li>
    );
}

export default PaginationListNumber;