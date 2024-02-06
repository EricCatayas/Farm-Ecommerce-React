import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/userSlice";
import AuthenticationService from "../../services/authenticationService";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './navbar.styles.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const authService = new AuthenticationService
    

    const { cartCount, isCartOpen, setIsCartOpen } = useSelector((state) => state.cart);

    const handleSignOutClick = () => {
        console.log("Signing user out");
        authService.signOut();
        dispatch(setCurrentUser(null));
    }

    const handleCartClick = () => {
      console.log("Cart link clicked");
      console.log(isCartOpen);
      setIsCartOpen(!isCartOpen);
    };

    return (
      <nav className="main-navbar shadow-sm sticky-top theme-color">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              {/* TODO: remove decor */}
                <h5 className="brand-name"><a href="/">Farm Ecommerce</a></h5>             
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div className="input-group">  
                    <input type="search" placeholder="Search products" className="form-control"/>
                    <button className="btn bg-white" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                {currentUser ? (
                  <ul className="nav justify-content-end">
                    <li className="nav-item" onClick={handleCartClick}>
                      <a className="nav-link" href="#">
                        <i className="fa fa-shopping-cart"></i> Cart (
                        {cartCount})
                      </a>
                    </li>
                    {
                      isCartOpen && <CartDropdown />
                    }
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-heart"></i> Wishlist (0)
                      </a>
                    </li> */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-user"></i> Account
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                  <ul className="nav justify-content-end">
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