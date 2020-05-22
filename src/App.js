import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import NonPreferredBehaviors from "./components/nonPreferredBehaviors";
import PreferredBehaviors from "./components/preferredBehaviors";
import Login from "./components/Login";
import BehaviorModal from "./components/BehaviorModal";
import Router from "./Router";
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
