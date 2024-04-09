import "./sidebar.styles.css";

const Sidebar = () => {
    return(
        <div class="mobile-show" id="mobile-menu">
            <div class="overlay">&nbsp;</div>
            <div class="header-menu">
                <div class="logo-container">
                    <a href="/">
                        <img src="/bundles/systemextmain/img/logo-agro.png?122" alt="Agro-market24.pl"/>
                        <h3 class="logo-text">International Agricultural Exchange</h3>
                    </a>
                </div>
                <ul class="nav navbar-nav main-top-nav ">            
                    <li class="new_pub_link disable_active first last">            
                        <a href="/pub/new">
                            Add an advertisement
                        </a>                            
                    </li>
                </ul>
            </div>
            <div class="lists">
                <span class="menu-cross"></span>
                <ul class="nav navbar-nav main-top-nav ">
                    <li class="navbar-menu-pub-list first active">            
                        <a href="/">
                            Advertisement list
                        </a>        
                    </li>
                    <li>            
                        <a href="/companies">
                            Company catalogue
                        </a>        
                    </li>
                    <li class="disable_active">            
                        <a href="/register/?referer=chat_menu">
                            Messenger
                        </a>        
                    </li>
                    <li class="about_us_menu_link">            
                        <a href="/about-us">
                            About us
                        </a>        
                    </li>
                    <li class="login-link last">            
                        <a href="/login">
                            Log in
                        </a>        
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;