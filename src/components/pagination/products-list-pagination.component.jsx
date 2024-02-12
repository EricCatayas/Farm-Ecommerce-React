import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../redux/product/productListPaginationSlice';
import { fetchNextPage, fetchPreviousPage, fetchProducts } from '../../redux/product/productListPagination.actions';
import { NextButton, PreviousButton } from './pagination-buttons';
import { getPageNumbers } from '../../utils/page-numbers.utils';
import './products-list-pagination.styles.scss';

const ProductsListPagination = () => {
  const { pageNumber } = useSelector((state) => state.productListPagination);
  const dispatch = useDispatch();

  const maxPages = 10;
  const pageNumbers = getPageNumbers(pageNumber, maxPages);

  const pageClickHandler = (event) => {
    console.log("pageClicked!");
    //dispatch(setPageNumber(pageNumber));
    //dispatch(fetchProducts());
  }
  const nextPageHandler = () => {
    console.log("next page clicked!")
    dispatch(fetchNextPage());
  }
  const previousPageHandler = () => {
    console.log("previous page clicked!")
    dispatch(fetchPreviousPage());
  }

  return (
    <section className="pagination_section">
      <div className="container">
        <ul className="pagination">
          <li className="pagination__btn">
            <PreviousButton onClick={previousPageHandler}/>
          </li>
          {pageNumbers.map((page) => (
            <li key={page} className={`pagination__numbers ${ page === pageNumber ? "active" : "" }`} onClick={pageClickHandler}>{page}</li>
          ))}
          {pageNumber < maxPages && 
            <>
              <li className="pagination__dots">...</li>
              <li className="pagination__numbers"> {maxPages}</li>
            </>
          }
          <li className="pagination__btn">
            <NextButton onClick={nextPageHandler}/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsListPagination;