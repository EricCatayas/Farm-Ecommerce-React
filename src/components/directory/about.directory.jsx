import { Component } from "react";
import AboutUs from "../about/about-us.component";
import MainMenu from "../main-menu/main-menu.component";

class AboutUsDirectory extends Component {

  render() {
    return (
      <section className="about-us">
        <MainMenu/>
        <AboutUs/>
      </section>
    );
  }
}

export default AboutUsDirectory;
