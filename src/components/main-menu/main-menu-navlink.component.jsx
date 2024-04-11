import { useLocation } from "react-router-dom";

const NavLink = ({ name, href, altHref}) => {
    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <li className="nav-item">
            { currentPath == href ? (
                <a className="active" href={altHref ? altHref : href}>{name}</a>
            ): (
                <a href={href}>{name}</a>
            )}
        </li>
    )
};

export default NavLink;
