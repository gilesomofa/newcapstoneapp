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
        {<h1>Behvaviors</h1>}
        {preferredBehaviorItems}
      </div>
    );
  }
}
PreferredBehaviors.propTypes = {
  preferredBehaviors: PropTypes.array.isRequired,

  newPreferredBehavior: PropTypes.object,
};

const mapStateToProps = (state) => ({
  preferredBehaviors: state.behavior.items,
  newPreferredBehavior: state.behavior.item,
});
export default connect(mapStateToProps, {
  preferredBehaviors,
})(PreferredBehaviors);
