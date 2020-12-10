import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStudents } from "../Redux/actions/studentActions";
import BehaviorModal from "./BehaviorModal";

class Students extends Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.newstudent) {
      this.props.students.unshift(nextProps.newStudent);
    }
  }
//for security, students names should not appear in browser when being edited, perhaps initials or student id
  render() {
    
    const studentItems = this.props.students.map((student) => (
      <div className="StudentCard" key={student.student_id}>
        <ul  className="Student-List">
          <li>
            Student Id: {student.student_id}
            <br />
            Student Name:{" "}
            {student.student_firstname + " " + student.student_lastname}
          </li>
          <li>
            <BehaviorModal
              id={student.student_id}
              name={student.student_firstname + " " + student.student_lastname}
            />
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


