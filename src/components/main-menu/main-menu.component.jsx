import './main-menu.styles.scss';

const MainMenu = () => {

    return(
        <section className="main-menu text-center">
            <div className="row justify-content-around">
                <div className="col col-xs-3">
                    <div className="main-menu-logo-container">
                        <img src="./logo192.png"/>
                    </div>
                </div>
                <div className="col col-xs-9 d-flex align-items-center">
                    <div className="main-menu-nav-container">
                        <ul class="nav navbar-nav d-flex flex-row">
                            <li class="nav-item"><span class="badge theme-color">Manage Store</span></li>
                            <li class="nav-item"><span class="badge text-bg-danger">Free Advertisement</span></li>
                            <li class="nav-item disabled">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMenu;