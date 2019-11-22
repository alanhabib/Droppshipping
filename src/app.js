import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Routers/AppRouter";
// import 'normalize.css/normalize.css';
import "./styles/styles.scss";
import { ProductProvider } from "./context";

ReactDOM.render(
  <ProductProvider>
    <AppRouter />
  </ProductProvider>,
  document.getElementById("app")
);
