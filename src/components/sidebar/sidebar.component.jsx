import { useContext } from "react";
import NavigationContext from "../../contexts/navigation.context";
import "./sidebar.styles.css";

const Sidebar = () => {
    const { showSidebar, setToggleSidebar } = useContext(NavigationContext);

    const toggleSidebar = () => {
        setToggleSidebar(false);
    }

    return (
      <>
        {showSidebar ? (
          <div className="mobile-show" id="mobile-menu">
            <div className="header-menu theme-color">
              <div className="logo-container theme-color">
                <h2>Agri-Store</h2>
                <h3>Online Agricultural Exchange Platform</h3>
              </div>
              {/* <ul className="nav navbar-nav main-top-nav ">            
                            <li className="new_pub_link disable_active first last">            
                                <a href="/pub/new">
                                    Add an advertisement
                                </a>                            
                            </li>
                        </ul> */}
            </div>
            <div className="lists">
              <span
                className="menu-cross"
                onClick={() => toggleSidebar()}
              ></span>
              <ul className="nav navbar-nav main-top-nav ">
                <li className="navbar-menu-pub-list first active">
                  <a href="/">Advertisement list</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li className="disable_active">
                  <a href="/store">Manage Store</a>
                </li>
                <li className="disable_active">
                  <a href="https://farmecommerce.azurewebsites.net" target="_blank">API</a>
                </li>
                <li className="login-link last">
                  <a href="/login">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
}

export default Sidebar;