import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BehaviorCheckbox from "./BehaviorCheckbox";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");

class NonPreferredBehaviors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.isChecked;
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    return (
      <React.Fragment>
        <h3>Select Non Preferred Behaviors</h3>
        {nonPreferredBehaviors.map((item) => (
          <label key={item.key}>
            {item.name}
            <BehaviorCheckbox
              name={item.name}
              checked={this.state.checkedItems.get(item.name)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}

NonPreferredBehaviors.propTypes = {
  nonPreferredBehaviors: PropTypes.array.isRequired,

  newNonPreferredBehavior: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state, "hello nonpreferred");
  return {
    nonPreferredBehaviors: state.behaviors.items,
    newNonPreferredBehavior: state.behaviors.item,
  };
};

export default connect(mapStateToProps, {
  nonPreferredBehaviors,
})(NonPreferredBehaviors);
