import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
console.log({ nonPreferredBehaviors });
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");
console.log({ preferredBehaviors });
const allBehaviors = nonPreferredBehaviors.concat(preferredBehaviors);
console.log(allBehaviors);

class Behaviors extends React.Component {
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

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      allBehaviors: {
        ...prevState.allBehaviors,
        [name]: !prevState.allBehaviors[name],
      },
    }));
  };

  handleSubmit = (event) => {
    alert("Select a behavior: " + this.state.value);
    event.preventDefault();
  };

  render() {
    console.log({ allBehaviors });
    const behaviorItems = this.props.allBehaviors.map(() => (
      <div>
        <input type="checkbox" /> {allBehaviors.name}
      </div>
    ));

    return (
      <div>
        {<h1>Behaviors</h1>}
        {behaviorItems}
      </div>
    );
  }
}
Behaviors.propTypes = {
  allBehaviors: PropTypes.array.isRequired,
  newBehavior: PropTypes.object,
  nonPreferredBehaviors: PropTypes.array.isRequired,
  preferredBehaviors: PropTypes.array.isRequired,
};

// const mapStateToProps = (state) => ({
//   allBehaviors: state.allBehaviors.items,
//   newBehavior: state.allBehaviors.item,
// });
export default connect(null, { allBehaviors })(Behaviors);
