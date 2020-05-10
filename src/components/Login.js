import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleTextChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = e => {
    e.preventDefault();
    document.cookie = `loggedIn=true;max-age=60*20000`;
    // set loggedIn = true and max-age = 60*20000 (twenty minutes)

    window.location.replace("/studentForm");
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              >
              Login
            </Button>
          </form>
          <p>Log in to edit records</p>
        </Container>
      </div>
    );
  }
}

export default Login;