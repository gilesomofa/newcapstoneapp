import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  createPreferredBehavior,
  createNonPreferredBehavior,
} from "../Redux/actions/behaviorActions";

const nonPreferredBehaviors = require("../Redux/behaviorState/nonPreferredBehaviors.json");

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
  //place fetch(post) to server router (post) that hooks up to the database

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
      <div className="BehaviorForm">
        <h1>Add Preferred Behavior</h1>
        <form onSubmit={this.onSubmit}>
          <label>Behavior Name: </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </form>
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <br />
        <br />
        <h1>Add Non Preferred Behavior</h1>
        <form onSubmit={this.onSubmit}>
          <label>Behavior Name: </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </form>
        <br />
        <button type="submit">Submit</button>
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

//when teacher is editing record, there should be an automatic timeout with prompt to continue after 2 minutes 
// to prevent people reading records. There should also be a mode where teacher can turn this off while 
//editing for extended period. This should be designed with some sort of failsafe to return to timeout mode with
// promt after a certain period of time. Like the behavior netflix uses when it checks if you are still watching  