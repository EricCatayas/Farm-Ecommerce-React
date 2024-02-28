import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../redux/product/productListPaginationSlice';
import { fetchNextPageAsync, fetchPreviousPageAsync, fetchProductsAsync } from '../../redux/product/productListPagination.actions';
import { NextButton, PreviousButton } from './pagination-buttons';
import { getPageNumbers } from '../../utils/page-numbers.utils';
import './products-list-pagination.styles.scss';

//TODO: Button lost "active"
const ProductsListPagination = () => {
  const { pageNumber } = useSelector((state) => state.productListPagination);
  const dispatch = useDispatch();

  const maxPages = 6;
  const pageNumbers = getPageNumbers(pageNumber, maxPages);

  const pageClickHandler = (event) => {
    console.log("pageClicked!");
    const pageNumber = event.target.dataset.id;

    dispatch(setPageNumber(pageNumber));
    dispatch(fetchProductsAsync());
  }
  const nextPageHandler = () => {
    console.log("next page clicked!")
    if(pageNumber < maxPages)
      dispatch(fetchNextPageAsync());
  }
  const previousPageHandler = () => {
    console.log("previous page clicked!");
    if(pageNumber > 1)
      dispatch(fetchPreviousPageAsync());
  }

  return (
    <section className="pagination_section">
      <div className="container">
        <ul className="pagination">
          <li className="pagination__btn">
            <PreviousButton onClickEventHandler={previousPageHandler}/>
          </li>
          {pageNumbers.map((page) => (
            <li key={page} className={`pagination__numbers ${ page === pageNumber ? "active" : "" }`} data-id={page} onClick={pageClickHandler}>{page}</li>
          ))}         
          {/* <li className="pagination__dots">...</li>*/}
          <li className="pagination__btn">
            <NextButton onClickEventHandler={nextPageHandler}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsListPagination;