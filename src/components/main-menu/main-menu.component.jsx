import './main-menu.styles.scss';

const MainMenu = () => {

    return(
        <section className="main-menu text-center">
            <div className="row justify-content-around">
                <div className="col col-xs-3">
                    <div className="main-menu-logo-container">
                        <img src="/logo192.png"/>
                    </div>
                </div>
                <div className="col col-xs-9 d-flex align-items-center">
                    <div className="main-menu-nav-container">
                        <ul className="nav navbar-nav d-flex flex-row">
                            <li className="nav-item"></li>
                            <li className="nav-item"><a className="btn btn-theme" href="/">Advertisements</a></li>
                            <li className="nav-item"><a className="btn btn-danger">Manage Store</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMenu;