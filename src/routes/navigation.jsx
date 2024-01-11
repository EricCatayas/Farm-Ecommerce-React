import { Outlet } from "react-router-dom";
import {Fragment } from 'react';
import Navbar from "../components/navbar/navbar.component";

const Navigation = () => {

    return (
        <Fragment>
            <Navbar/>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;