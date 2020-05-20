import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from "./Login";
import Students from "./Students";
import BehaviorForm from "./BehaviorForm";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/students" component={Students} />
      <Route path="/studentForm" component={StudentForm} />
      <Route path="/preferredBehaviors" component={PreferredBehaviors} />
      <Route path="/nonPreferredBehaviors" component={NonPreferredBehaviors} />
      <Route path="/behaviorForm" component={BehaviorForm} />
    </Switch>
  );
};

export default Router;
