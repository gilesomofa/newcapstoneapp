import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStudent } from "../Redux/actions/studentActions";
import { fetchStudents } from "../Redux/actions/types"


class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classroom_id: "",
      firstname: "",
      lastname: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const student = {
      classroom_id: this.state.classroom_id,
      student_firstname: this.state.firstname,
      student_lastname: this.state.lastname,
    };

    this.props.createStudent(student);
    console.log(student);
    window.location.reload();
  }
  render() {
    return (
      <div className="StudentForm">
        <h1>Add Student</h1>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Classroom Id: </label>
            <br />
            <input
              type="text"
              name="classroom_id"
              onChange={this.onChange}
              value={this.state.classroom_id}
            />
          </div>
          <br />
          <div>
            <label>Student Firstname: </label>
            <br />
            <textarea
              name="firstname"
              onChange={this.onChange}
              value={this.state.firstname}
            />
          </div>
          <div>
            <label>Student Last Name: </label>
            <br />
            <textarea
              name="lastname"
              onChange={this.onChange}
              value={this.state.lastname}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

StudentForm.propTypes = {
  createStudent: PropTypes.func.isRequired,
};

export default connect(null, { createStudent })(StudentForm);
