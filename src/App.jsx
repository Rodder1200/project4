import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import store from "./config/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="container">
              <div>
                <h1 className="display-2">Flea market</h1>
              </div>
              <Router />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
