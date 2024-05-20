import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const NavLink = ({ name, href}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const handleClick = (e) => {
        e.preventDefault();        
        navigate(href);
    }

    return (
        <li className="nav-item">
            <a className={currentPath == href ? "active" : ""} onClick={handleClick}>{name}</a>
        </li>
    )
};

export default NavLink;
