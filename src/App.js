import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import store from "./store";
import BehaviorForm from "./components/BehaviorForm";
import Behaviors from "./components/Behaviors";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <StudentForm />
          <hr />
          <Students />
          <Behaviors />
          <BehaviorForm />
        </div>
      </Provider>
    );
  }
}
export default App;
