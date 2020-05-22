import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

const initialState = {
  username: "",
  email: "",
  password: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
};
class Login extends Component {
  state = initialState;

  handleTextChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let usernameError = "";
    let emailError = "";
    //let passwordError = "";

    if (!this.state.username) {
      usernameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.password) {
      usernameError = "password cannot be blank";
    }

    if (usernameError || emailError) {
      this.setState({ usernameError, emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
    document.cookie = `loggedIn=true;max-age=60*20000`;
    // set loggedIn = true and max-age = 60*20000 (twenty minutes)

    window.location.replace("/Students");
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
              placeholder="Username"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.email}
              name="email"
              placeholder="Email"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              placeholder="Password"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {" "}
              {this.state.passwordError}
            </div>

            <Button type="submit" className="login-button" variant="contained">
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
