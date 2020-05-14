import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNonPreferedBehavior } from "../actions/behaviorActions";

class NonPreferredBehaviors extends Component {
  componentWillMount() {
    this.props.getNonPreferredBehaviors();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.nonPreferredBehaviors) {
      this.props.nonPreferredBehaviors.unshift(
        nextProps.createNonPrefferedBehavior
      );
    }
  }
  render() {
    const nonPreferredBehaviorItems = this.props.nonPreferredBehaviors.map(
      (nonPreferredBehaviors) => (
        <div>
          <form>
            <label>Select Student's Non-Preferred behaviors</label>
            <button>Submit</button>
          </form>
        </div>
      )
    );
    return (
      <div>
        {<h1>Non-Preferred Behaviors</h1>}
        {nonPreferredBehaviorItems}
      </div>
    );
  }
}
NonPreferredBehaviors.propTypes = {
  nonPreferredBehaviors: PropTypes.array.isRequired,
  // PreferredBehaviors: PropTypes.array.isRequired,
  // createPreferredBehavior: PropTypes.func.isRequired,
  createNonPrefferedBehavior: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // preferredBehaviors: state.preferredBehaviors.items,
  nonPreferredBehaviors: state.nonPreferredBehaviors.items,
  // createPreferredBehavior: state.behaviors.item,
  createNonPrefferedBehavior: state.behaviors.item,
});
export default connect(mapStateToProps, { createNonPreferedBehavior })(
  NonPreferredBehaviors
);
