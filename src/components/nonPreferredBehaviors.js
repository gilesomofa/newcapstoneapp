import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  { getNonPreferredBehaviors } from ("../actions/behaviorActions");
const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");	

class NonPreferredBehaviors extends React.Component {
  componentWillMount = () => this.props.getNonPreferredBehaviors;

  render() {
    const nonPreferredBehaviorItems = this.props.nonPreferredBehaviors.map(
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
        {<h1>Non Preferred Behaviors</h1>}
        {nonPreferredBehaviorItems}
      </div>
    );
  }
}
Behaviors.propTypes = {
  nonPreferredBehaviors: PropTypes.array.isRequired,

  newNonPreferredBehavior: PropTypes.object,
};

const mapStateToProps = (state) => ({
  behaviors: state.behavior.items,
  newBehavior: state.behavior.item,
});
export default connect(mapStateToProps, {
  nonPreferredBehaviors,
})(NonPreferredBehaviors);
