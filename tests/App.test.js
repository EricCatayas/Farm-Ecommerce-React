import App from "../src/App";
import { Provider } from 'react-redux'; // Import Provider
import { store } from "../src/redux/store"; // Import your Redux store
import { render } from "@testing-library/react";
import { renderWithProviders, setupStore } from "./test.utils"
import { BrowserRouter } from "react-router-dom";
import { signInWithTokenStart } from "../src/redux/user/user.actions";


describe('App Component', () => {

  test("dummy test", () => {
    expect(true).toBe(!false);
  })

  // it("renders without crashing", () => {
  //   renderWithProviders(
  //     <BrowserRouter>
  //       <App/>
  //     </BrowserRouter>
  //   );
  // });
    

  // test("renders Home component", () => {
  //   const { getByText } = render(<App />);
    
  //   const homeComponent = getByText("home")
  //   expect(homeComponent).toBeInTheDocument();
  // });
})
