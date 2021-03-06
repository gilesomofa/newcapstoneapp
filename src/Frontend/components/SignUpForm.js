import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  pin: "",
};
class SignUp extends Component {
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
    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      window.alert(`${this.state.email} is an invalid email`);
      return false;
    } else {
      return true;
    }
  };

  SignUp = (event) => {
    event.preventDefault();
    if (this.validate()) {
      window.location.replace("/");
      console.log(this.validate);
      // clear form
    }
  };

  render() {
    return (
      <div className="Login">
        <h1>Daily Behavior Report Card</h1>
        <Container maxWidth="lg" className="Login-Container">
          <form className="login-form" onSubmit={this.SignUp}>
            <TextField
              id="login_field"
              required
              onChange={this.handleTextChange}
              value={this.state.first_name}
              name="first_name"
              placeholder="First Name"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>
            <TextField
              id="login_field"
              required
              onChange={this.handleTextChange}
              value={this.state.last_name}
              name="last_name"
              placeholder="Last Name"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>
            <TextField
              id="login_field"
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
              id="login_field"
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
              id="login_field"
              required
              onChange={this.handleTextChange}
              value={this.state.pin}
              name="pin"
              placeholder="Pin"
              type="text"
            />
            <div style={{ fontSize: 12, color: "red" }}></div>

            <Button type="submit" className="login-button" variant="contained">
              Sign Up
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default SignUp;
