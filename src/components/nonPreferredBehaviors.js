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
      comments: "",

      behaviors: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target);
    if (e.target.checked === true) {
      this.setState({ behaviors: [...this.state.behaviors, e.target.name] });
    }
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
          {nonPreferredBehaviors.map((item) => (
            <label key={item.key}>
              <BehaviorCheckbox
                name={item.name}
                //   checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}
              />
              {item.name}
            </label>
          ))}
          <h3>Select Preferred Behavior(s)</h3>
          {preferredBehaviors.map((item) => (
            <label key={item.key}>
              <BehaviorCheckbox
                name={item.name}
                // checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}
              />
              {item.name}
            </label>
          ))}
        </form>
      </React.Fragment>
    );
  }
}

NonPreferredBehaviors.propTypes = {
  nonPreferredBehaviors: PropTypes.array.isRequired,

  newNonPreferredBehavior: PropTypes.object,
};

export default NonPreferredBehaviors;
