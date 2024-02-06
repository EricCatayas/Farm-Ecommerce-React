import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductCategoriesProvider } from "./contexts/product-categories.context";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// test1@example.com _Test1

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ProductCategoriesProvider>
            <ProductsProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductsProvider>
          </ProductCategoriesProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
