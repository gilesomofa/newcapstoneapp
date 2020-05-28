import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/Frontend/Redux/store";

import Router from "../src/Frontend/components/Router";
import { BrowserRouter } from "react-router-dom";

document.addEventListener("DOM.contentLoaded", function () {});
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
export default App;
