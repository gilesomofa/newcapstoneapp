import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const nonPreferredBehaviors = require("../behaviorState/nonPreferredBehaviors.json");
const preferredBehaviors = require("../behaviorState/preferredBehaviors.json");

class Behaviors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Select a behavior: " + this.state.value);
    event.preventDefault();
  };
  render() {
    console.log("hello");

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Select Preferred behaviors </label>
          {preferredBehaviors.map((behavior) => (
            
            <input type="checkbox" id = { preferredBehaviors.id } name = { preferredBehaviors.name }  
            value = { preferredBehaviors.name }
              <label for = "name">{preferredBehaviors.name}</label>

            >
             
            </input>
          ))}
        </form>
        <br />
        <br />
        <form>
          <label> Select Non referred behaviors </label>
          <select>
            {nonPreferredBehaviors.map((behavior) => (
              <option
                key={nonPreferredBehaviors.id}
                value={nonPreferredBehaviors.name}
              ></option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}
export default Behaviors;

// import { getNonPreferredBehaviors } from "../actions/behaviorActions";
// import { createNonPreferredBehavior } from "../actions/behaviorActions";

// class NonPreferredBehaviors extends Component {
//   componentWillMount() {
//     this.props.getNonPreferredBehaviors();
//     // this.props.createNonPreferredBehavior();
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.createNonPreferredBehavior) {
//       this.props.nonPreferredBehaviors.unshift(
//         nextProps.createNonPreferredBehavior
//       );
//     }
// }

// }
// NonPreferredBehaviors.propTypes = {
//   getNonPreferredBehaviors: PropTypes.func.isRequired,
//   nonPreferredBehaviors: PropTypes.array.isRequired,
//   createNonPreferredBehavior: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   nonPreferredBehaviors: state.nonPreferredBehaviors.items,
//   createNonPreferredBehaviors: state.nonPreferredBehaviors.item,
// });
// export default connect(mapStateToProps, { getNonPreferredBehaviors })(
//   NonPreferredBehaviors
// );

// PreferredBehaviors: PropTypes.array.isRequired,
// createPreferredBehavior: PropTypes.func.isRequired,
// preferredBehaviors: state.preferredBehaviors.items,
// createPreferredBehavior: state.behaviors.item,
