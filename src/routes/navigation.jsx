import { Outlet } from "react-router-dom";
import { NavigationProvider } from "../contexts/navigation.context";
import Navbar from "../components/navbar/navbar.component";
import Sidebar from "../components/sidebar/sidebar.component";

const Navigation = () => {

    return (
      <NavigationProvider>
        <Sidebar />
        <Navbar />
        <Outlet />
      </NavigationProvider>
    );
}

export default Navigation;