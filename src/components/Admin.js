import React, { Component } from "react";
import Students from "./Students";
import StudentForm from "./StudentForm";
import BehaviorForm from "./BehaviorForm";

export default class Admin extends Component {
  render() {
    return (
      <div className="Admin-Container">
        <div className="Form-Container">
          <StudentForm />
          <BehaviorForm />
        </div>
        <Students />
      </div>
    );
  }
}
