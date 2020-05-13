import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import store from "./store";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Login />
          <StudentForm />
          <hr />
          <Students />
        </div>
      </Provider>
    );
  }
}
export default App;
