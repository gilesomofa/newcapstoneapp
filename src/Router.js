import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Students from "./components/Students";
import BehaviorForm from "./components/BehaviorForm";
import Admin from "./components/Admin";
import SignUp from "./components/SignUpForm";
const nonPreferredBehaviors = require("./behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("./behaviorState/preferredBehaviors.json");

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Admin" component={Admin} />
    </Switch>
  );
};

export default Router;
