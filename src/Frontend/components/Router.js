import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from "./Login";
import Students from "./Students";
import BehaviorForm from "./BehaviorForm";
import Admin from "./Admin";
import SignUp from "./SignUpForm";

// const nonPreferredBehaviors = require("./behaviorState/nonPreferredBehaviors.json");

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
