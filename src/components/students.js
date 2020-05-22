import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/studentActions";

class Students extends Component {
  componentWillMount() {
    this.props.fetchStudents();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newstudent) {
      this.props.students.unshift(nextProps.newStudent);
    }
  }

  render() {
    const studentItems = this.props.students.map((student) => (
      <div key={student.id}>
        <h3>
          {student.id} {student.name}
          <button className="Behavior-Button">Monitor Behavior</button>{" "}
        </h3>
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

const mapStateToProps = (state) => ({
  students: state.students.items,
  newStudent: state.students.item,
});
export default connect(mapStateToProps, { fetchStudents })(Students);
