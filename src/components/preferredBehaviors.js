import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getPreferredBehaviors } from "../actions/behaviorActions";

const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");
console.log({ preferredBehaviors });
class PreferredBehaviors extends React.Component {
  componentWillMount = () => this.props.preferredBehaviors;

  render() {
    const preferredBehaviorItems = this.props.preferredBehaviors.map(
      (behavior) => (
        <div key={behavior.type.id}>
          <h3>
            {behavior.type.name} {behavior.name}
          </h3>
        </div>
      )
    );
    return (
      <div>
        {" "}
        {<h1>Preferred Behaviors</h1>}
        {preferredBehaviorItems}{" "}
      </div>
    );
  }
}
PreferredBehaviors.propTypes = {
  preferredBehaviors: PropTypes.array.isRequired,

  newPreferredBehaviors: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state, "hello");
  return {
    preferredBehaviors: state.behaviors.items,
    newPreferredBehavior: state.behaviors.item,
  };
};
export default connect(mapStateToProps, {
  preferredBehaviors,
})(PreferredBehaviors);
