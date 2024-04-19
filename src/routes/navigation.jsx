import { Outlet } from "react-router-dom";
import { NavigationProvider } from "../contexts/navigation.context";
import Navbar from "../components/navbar/navbar.component";
import Sidebar from "../components/sidebar/sidebar.component";
import Footer from "../components/footer/footer.component";
import Alert from "../components/alert/alert";

const Navigation = () => {

    return (
      <NavigationProvider>
        <Sidebar/>
        <Navbar/>
        <Alert/>
        <Outlet/>
        <Footer/>
      </NavigationProvider>
    );
}

export default Navigation;