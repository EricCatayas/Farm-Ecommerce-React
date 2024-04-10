import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { fetchFilteredProductsStart } from "../../redux/productsListPagination/productsListPagination.action";
import { createProductQueryParams } from "../../utils/productQueryParams";
import NavigationContext from "../../contexts/navigation.context";
import SearchBar from "../searchbar/searchbar.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './navbar.styles.css';


const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { setToggleSidebar } = useContext(NavigationContext);

    const dispatch = useDispatch();
    
    const handleSignOutClick = () => {
        console.log("Signing user out");
        dispatch(signOutStart());
    }

    const handleSearchClick = useCallback((searchField) => {
      console.log(`Search product: ${searchField}`);

      if (searchField) {
        const query = createProductQueryParams('product_name', searchField);
        dispatch(fetchFilteredProductsStart(query));
      }
    }, []);

    const toggleSidebar = () => {
      setToggleSidebar(true);
    }

    return (
      <nav className="main-navbar shadow-sm sticky-top theme-color">
        <div className="top-navbar">
          <div className="container-fluid"> 
            <div className="row">
              <div className="col col-md-3">
                <div className="navbar-nav">
                  <h5 className="website-title mobile-hide">
                    <a className="navbar-brand" href="/">Farm Ecommerce</a>
                  </h5>
                  <div className="menu-toggle">
                    <i class="fa fa-bars fa-2x mobile-show" aria-hidden="true" onClick={toggleSidebar}></i>
                  </div>
                </div>
              </div>
              <div className="col col-md-5">
                <SearchBar handleSearch={handleSearchClick} />
              </div>
              <div className="col col-md-4 mobile-hide">
                {currentUser ? (
                  <ul className="navbar-nav pull-right">
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-heart"></i> Wishlist (0)
                      </a>
                    </li> */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-user"></i> Account
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-user"></i> Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-list"></i> My Orders
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-shopping-cart"></i> My Cart
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" onClick={handleSignOutClick}>
                            <i className="fa fa-sign-out"></i> Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav pull-right">
                    <li className="nav-item">
                      <a className="nav-link" href="/sign-in">
                        <i className="fa fa-sign-in"></i> Sign In
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;