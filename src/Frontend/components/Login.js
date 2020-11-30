import React, { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  pin: "",
  loggedIn: false,
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
    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      window.alert(`${this.state.email} is an invalid email`);
      return false;
    } else {
      return true;
    }
  };

  login = (event) => {
    event.preventDefault();
    console.log('hello world I am a login')
    if(!this.validate()){alert('check your inputs, something is wrong')
  } else
    if (this.validate()) {
      fetch("http://localhost:8080/login", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacher_email: this.state.email,
          teacher_pin: this.state.teacher_pin,
          teacher_password: this.state.teacher_password,
        }),
      });
      this.setState({ loggedIn: true });
      this.props.history.replace("/Admin");
      document.cookie = `loggedIn=true;max-age=60*20000`;
      //set loggedIn = true and max-age = 60*20000 (twenty minutes)
      // clear form
    }
    this.setState(initialState);
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/Admin" />
    ) : (
      <div className="Login">
        <h1>Daily Behavior Report Card</h1>
        <Container maxWidth="lg" className="Login-Container">
          <form className="login-form" onSubmit={this.login}>
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
              Login
            </Button>
          </form>
          <p>Log in to edit records</p>
          <br />
          <Button
            className="login-button"
            variant="contained"
            onClick={() => window.location.replace("/SignUp")}
          >
            Sign Up
          </Button>
          <p>Sign up if you are a new user</p>
        </Container>
      </div>
    );
  }
}

export default Login;
