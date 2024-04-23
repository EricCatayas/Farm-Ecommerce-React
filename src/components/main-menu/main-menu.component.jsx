import './main-menu.styles.scss';
import NavLink from './main-menu-navlink.component';


const MainMenu = () => {    
    return(
        <section className="main-menu text-center">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-3">
                        <div className="logo-container">
                            <img src="/logo-agri-store.png"/>
                        </div>
                    </div>
                    <div className="col col-xs-9 mobile-hide">
                        <div className="nav-container">
                            <ul className="nav navbar-nav d-flex flex-row">
                                <NavLink name={"Advertisements"} href={"/"}/>
                                <NavLink name={"About Us"} href={"/about-us"}/>
                                <NavLink name={"Manage Store"} href={"/store"}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMenu;