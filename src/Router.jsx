import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import SingleProductPage from "./pages/singleProductPage";
import CreateProductPage from "./pages/createProductPage";

const baseUrl = process.env.PUBLIC_URL;

const Router = () => (
  <React.Fragment>
    <Switch>
      <Route exact path={baseUrl + "/"} component={MainPage} />
      <Route path={baseUrl + "/single_:name"} component={SingleProductPage} />
      <Route path={baseUrl + "/create"} component={CreateProductPage} />
    </Switch>
  </React.Fragment>
);

export default Router;
