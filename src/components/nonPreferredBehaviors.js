import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BehaviorCheckbox from "./BehaviorCheckbox";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

class NonPreferredBehaviors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //eventually will enable comments for elaboration

      comments: "",
      behaviors: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //logic for the checkbox that controls state of checkbox

    if (e.target.checked === true) {
      this.setState({ behaviors: [...this.state.behaviors, e.target.name] });
    }

    //allow for deselecting checkbox and resetting state

    if (e.target.checked === false) {
      let newState = this.state.behaviors;
      let removedBehavior = newState.indexOf(e.target.name);
      newState.splice(removedBehavior, 1);
      this.setState({ behaviors: newState });
    }
    console.log(this.state.behaviors);
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <h3>Select Non Preferred Behaviors</h3>
          {/* map through behaviors and return names of behaviors with corresponding checkbox */}
          {/*  */}
          {nonPreferredBehaviors.map((item) => (
            <label key={item.key}>
              <BehaviorCheckbox name={item.name} onChange={this.handleChange} />
              {item.name}
            </label>
          ))}
          <h3>Select Preferred Behavior(s)</h3>
          {preferredBehaviors.map((item) => (
            <label key={item.key}>
              <BehaviorCheckbox name={item.name} onChange={this.handleChange} />
              {item.name}
            </label>
          ))}
        </form>
      </React.Fragment>
    );
  }
}

export default NonPreferredBehaviors;
