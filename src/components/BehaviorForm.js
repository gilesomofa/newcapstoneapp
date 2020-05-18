import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createPreferredBehavior,
  createNonPreferredBehavior,
} from "../actions/behaviorActions";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

class BehaviorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      type: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const behavior = {
      name: this.state.name,
      type: this.state.type,
    };

    this.props.createNonPreferredBehavior(behavior);
    this.props.createPreferredBehavior(behavior);
  }

  render() {
    return (
      <div>
        <h1>Add Preferred Behavior</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Behavior Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="type"
              onChange={this.onChange}
              value={this.state.type}
            />
          </div>
          <br />
          <div>
            <label>Non Preferred Behavior: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="type"
              onChange={this.onChange}
              value={this.state.type}
            />
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

BehaviorForm.propTypes = {
  createNonPreferredBehavior: PropTypes.func.isRequired,
  createPreferredBehavior: PropTypes.func.isRequired,
};

export default connect(null, {
  createNonPreferredBehavior,
  createPreferredBehavior,
})(BehaviorForm);
