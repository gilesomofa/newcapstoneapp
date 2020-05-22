import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  pin: "",
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
    let emailErr = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailErr = "invalid email";
      console.log("invalid email");
    }

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (passwordError || emailErr) {
      this.setState({ passwordError, emailErr });
      return false;
    }

    return true;
  };

  login = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
    document.cookie = `loggedIn=true;max-age=60*20000`;
    // set loggedIn = true and max-age = 60*20000 (twenty minutes)

    window.location.replace("/Admin");
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.first_name}
              name="first_name"
              placeholder="First Name"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.last_name}
              name="last_name"
              placeholder="Last Name"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>
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
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.pin}
              name="pin"
              placeholder="Pin"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>

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
