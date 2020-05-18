import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
console.log({ nonPreferredBehaviors });
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");
console.log({ preferredBehaviors });
const allBehaviors = nonPreferredBehaviors.concat(preferredBehaviors);
console.log(allBehaviors);

class BehaviorForm extends React.Component {
  componentWillMount = () => this.props.nonPreferredBehaviors;
  componentWillMount = () => this.props.preferredBehaviors;
  componentWillMount = () => this.props.allBehaviors;

  componentWillReceiveProps(nextProps) {
    if (nextProps.nonPreferredBehavior) {
      this.props.nonPreferredBehaviors.unshift(nextProps.nonPreferredBehavior);
    }
    if (nextProps.preferredBehavior) {
      this.props.preferredBehaviors.unshift(nextProps.preferredBehavior);
    }
  }

  constructor(props) {
    super(props);
    this.state = [[preferredBehaviors.name, nonPreferredBehaviors.name]];
  }

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      selectBehaviors: {
        ...prevState.selectBehaviors,
        [name]: !prevState.selectBehaviors[name],
      },
    }));
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
        <input type="checkbox" onCheck={this.handleCheckboxChange} />
        <h3 className="Non Preferred Behavior">
          Select Non Preferred Behavior
        </h3>
        <p>Non Preferred Behaviors</p>
      </form>
    );
  }
}

export default BehaviorForm;
