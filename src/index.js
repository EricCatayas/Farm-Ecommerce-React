import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products.context";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductCategoriesProvider } from "./contexts/product-categories.context";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// test1@example.com _Test1
// TODO: 
//       Pagination: numbers and button
//       IAuthenticationService: Cannot read properties of 'setAuthCookies'
//       Component Implementation:
//          Sidebar 
//          About Us
//          ProductView
//          Navbar
//       Display: "Error: Feature has not been implemented yet." or something
//       Try: Tailwind css
//       Try: Lazy Loading
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
