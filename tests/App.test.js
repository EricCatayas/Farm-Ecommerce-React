import App from "../src/App";
import { render } from "@testing-library/react";
import { signInWithTokenStart } from "../src/redux/user/user.actions";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../src/redux/user/user.actions", () => ({
  signInWithTokenStart: jest.fn(),
}));


describe('App Component', () => {

  test("renders App component", () => {
    const { asFragment } = render(<App />);
    
    expect(asFragment()).toMatchSnapshot();
    expect(signInWithTokenStart).toHaveBeenCalled();
  });
  // test("renders Home component", () => {
  //   const { getByText } = render(<App />);
    
  //   const homeComponent = getByText("home")
  //   expect(homeComponent).toBeInTheDocument();
  // });
})
