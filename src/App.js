import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import store from "./store";
import BehaviorForm from "./components/BehaviorForm";
import NonPreferredBehaviors from "./components/nonPreferredBehaviors";
import PreferredBehaviors from "./components/preferredBehaviors";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <StudentForm />
          <hr />
          <Students />
          <hr />
          <PreferredBehaviors />
          <NonPreferredBehaviors />
          <hr />
          <BehaviorForm />
        </div>
      </Provider>
    );
  }
}
export default App;
