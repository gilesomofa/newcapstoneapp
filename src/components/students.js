import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../actions/studentActions";
import BehaviorModal from "./BehaviorModal";

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
    console.log(this.props.students);
    const studentItems = this.props.students.map((student) => (
      <div className="StudentCard">
        <ul key={student.id} className="Student-List">
          <li>
            Student Id: {student.id}
            <br />
            Student Name: {student.name}
          </li>
          <li>
            <BehaviorModal id={student.id} name={student.name} />
          </li>
        </ul>
      </div>
    ));
    return (
      <div className="Student-Container">
        {<h1>Students</h1>}
        <hr />
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
