import { useDispatch, useSelector } from 'react-redux';
import { fetchNextPageProducts, fetchPreviousPageProducts, fetchProductsByPageNumber} from '../../redux/productsListPagination/productsListPagination.action';
import { NextButton, PreviousButton, PaginationListNumber } from './pagination-buttons';
import { getPageNumbers } from '../../utils/page-numbers.utils';
import './products-list-pagination.styles.scss';

//TODO: Button lost "active"
const ProductsListPagination = () => {
  const { pageNumber } = useSelector((state) => state.productsListPagination);
  const dispatch = useDispatch();

  console.log("current Page number: " + pageNumber);
  const maxPages = 6;
  const pageNumbers = getPageNumbers(pageNumber, maxPages);

  const pageClickHandler = (event) => {
    const pageNumber = event.target.dataset.id;

    console.log("pageClicked!");
    dispatch(fetchProductsByPageNumber(pageNumber));
  }
  const nextPageHandler = () => {
    console.log("next page clicked!")
    if(pageNumber < maxPages)
      dispatch(fetchNextPageProducts());
  }
  const previousPageHandler = () => {
    console.log("previous page clicked!");
    if(pageNumber > 1)
      dispatch(fetchPreviousPageProducts());
  }

  return (
    <section className="pagination_section">
      <div className="container">
        <ul className="pagination">
          <li className="pagination__btn">
            <PreviousButton onClickEventHandler={previousPageHandler}/>
          </li>
          {pageNumbers.map((page) => (
            <PaginationListNumber page={page} isActive={page == pageNumber} onClickHandler={pageClickHandler}/>
          ))}         
          <li className="pagination__btn">
            <NextButton onClickEventHandler={nextPageHandler}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsListPagination;