import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import EditExpensePage from "../Components/EditExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";
import ProductList from "../Components/ProductList";
import Details from "../Components/Details";
import Cart from "../Components/Cart";
import Modal from "../Components/Modal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={ProductList} />
          <Route path={"/details"} component={Details} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/edit/:id"} component={EditExpensePage} />
          <Route path={"/help"} component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Modal />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
