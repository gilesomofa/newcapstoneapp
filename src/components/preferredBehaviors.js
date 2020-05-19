import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BehaviorCheckbox from "./BehaviorCheckbox";

const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

class PreferredBehaviors extends React.Component {
  constructor(props) {
    super(props);
    // componentWillMount = () => this.props.preferredBehaviors;
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
  //   render() {
  //     const preferredBehaviorItems = this.props.preferredBehaviors.map(
  //       (behavior) => (
  //         <div key={behavior.type.id}>
  //           <h3>
  //             {behavior.type.name} {behavior.name}
  //           </h3>
  //         </div>
  //       )
  //     );
  //     return (
  //       <div className="preferredBehaviorsItems">
  //         {<h1>Preferred Behaviors</h1>}
  //         <form input="checkbox">{preferredBehaviorItems} </form>
  //       </div>
  //     );
  //   }
  render() {
    return (
      <React.Fragment>
        {preferredBehaviors.map((item) => (
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
