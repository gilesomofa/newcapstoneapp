import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Students from "./components/Students";
import BehaviorForm from "./components/BehaviorForm";
import Admin from "./components/Admin";
const nonPreferredBehaviors = require("./behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("./behaviorState/preferredBehaviors.json");

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route path="/students" component={Students} />
      <Route path="/studentForm" component={StudentForm} />
      <Route path="/preferredBehaviors" component={PreferredBehaviors} />
      <Route path="/nonPreferredBehaviors" component={NonPreferredBehaviors} /> */}
      <Route path="/Admin" component={Admin} />
    </Switch>
  );
};

export default Router;
