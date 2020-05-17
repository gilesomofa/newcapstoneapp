import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

class Behaviors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Select a behavior: " + this.state.value);
    event.preventDefault();
  };
  render() {
    console.log("hello");

    return (
      <form>
        <h3 className="Preferred Behavior">Select Peferred Behavior</h3>
        <p>Preferred Behaviors</p>
        <input type="text" onChange={this.handleChange} />
        <h3 className="Non Preferred Behavior">
          Select Non Preferred Behavior
        </h3>
        <p>Non Preferred Behaviors</p>
      </form>
    );
  }
}

export default Behaviors;
