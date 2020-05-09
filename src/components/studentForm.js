import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStudent } from '../actions/studentActions';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: ''
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
            id: this.state.id,
            name: this.state.name
        };

        this.props.createStudent(student);
    }

    render() {
        return (
            <div>
                <h1>Add Student</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Student Id: </label>
                        <br />
                        <input
                            type="text"
                            name="id"
                            onChange={this.onChange}
                            value={this.state.id}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Student Name: </label>
                        <br />
                        <textarea
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
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
    createStudent: PropTypes.func.isRequired
};

export default connect(null, { createStudent })(StudentForm);