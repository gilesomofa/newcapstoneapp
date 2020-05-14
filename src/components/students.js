import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/studentActions";

class Students extends Component {
  componentWillMount() {
    this.props.fetchStudents();
    this.props.createBehavior();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newstudent) {
      this.props.students.unshift(nextProps.newStudent);
    }
  }

  render() {
    const studentItems = this.props.students.map((student) => (
      <div key={student.id}>
        <h3>{student.name}</h3>

        {/* another jsx element here for behavior drop down */}
      </div>
    ));
    return (
      <div>
        {<h1>Students</h1>}
        {studentItems}
      </div>
    );
  }
}
Students.propTypes = {
  fetchStudents: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
  newStudent: PropTypes.object,
  createBehavior: PropTypes.func.isRequired,
  newBehavior: PropTypes.object,
};

const mapStateToProps = (state) => ({
  students: state.students.items,
  newStudent: state.students.item,
});
export default connect(mapStateToProps, { fetchStudents })(Students);
