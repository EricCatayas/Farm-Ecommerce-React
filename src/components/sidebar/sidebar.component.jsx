import "./sidebar.styles.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import NavigationContext from "../../contexts/navigation.context";

const Sidebar = () => {
  const navigate = useNavigate();
  const { showSidebar, setToggleSidebar } = useContext(NavigationContext);

  const toggleSidebar = () => {
      setToggleSidebar(false);
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    navigate(href);
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
                <a onClick={(e) => handleLinkClick(e, "/about-us")}>About Us</a>
              </li>
              <li className="disable_active">
                <a onClick={(e) => handleLinkClick(e, "/store")}>Manage Store</a>
              </li>
              <li className="disable_active">
                <a href="https://farmecommerce.azurewebsites.net" target="_blank">API</a>
              </li>
              <li className="login-link last">
                <a onClick={(e) => handleLinkClick(e, "/sign-in")}>Sign in</a>
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