import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Login from './Login';
import Students from './Students';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/studentForm" component={StudentForm} />
    </Switch>
  );
};

export default Router;
