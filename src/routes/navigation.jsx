import { Outlet } from "react-router-dom";
import { NavigationProvider } from "../contexts/navigation.context";
import Navbar from "../components/navbar/navbar.component";
import Sidebar from "../components/sidebar/sidebar.component";
import Footer from "../components/footer/footer.component";

const Navigation = () => {

    return (
      <NavigationProvider>
        <Sidebar />
        <Navbar />
        <Outlet />
        <Footer />
      </NavigationProvider>
    );
}

export default Navigation;