import { useLocation } from "react-router-dom";

const NavLink = ({ name, href}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const handleClick = (e) => {
        if(currentPath === href)
            e.preventDefault();
    }

    return (
        <li className="nav-item">
            <a className={currentPath == href ? "active" : ""} href={href} onClick={handleClick}>{name}</a>
        </li>
    )
};

export default NavLink;
