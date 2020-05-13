import React, { Component } from "react";

export default class Behaviors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Behaviors: [
        {
          id: 0,
          behavior: "Pushing",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },

        {
          id: 1,
          behavior: "Kicking",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },

        {
          id: 2,
          behavior: "Leaving assigned area",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },

        {
          id: 3,
          behavior: "Running inside",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },

        {
          id: 4,
          behavior: "Hitting",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 5,
          behavior: "Did not wait for turn",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 6,
          behavior: "Unkind or abusive language",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 7,
          behavior: "Not controlling body",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 8,
          behavior: "Did not share materials",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 9,
          behavior: "Did not transition safely and quietly",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 10,
          behavior: "Inappropriate voice level",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },
        {
          id: 10,
          behavior: "Inappropriate or unsafe use of materials and equipment",
          selected: false,
          comment: "",
          key: "nonPreferredBehavior",
        },

        {
          id: 11,
          behavior: "On task",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 12,
          behavior: "Waited turn",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 13,
          behavior: "Using kind respectful words",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 14,
          behavior: "Using appropriate voice level",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 15,
          behavior: "Calm and settled body",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 16,
          behavior: "Sharing materials",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 17,
          behavior: "Transifioning safely and with appropriate voice level",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 18,
          behavior: "Using matrials and equipment safely and responsibly",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 19,
          behavior: "Attempting to do work",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 20,
          behavior: "Asking for help",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 21,
          behavior: "Helping classmate",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
        {
          id: 22,
          behavior: "Helping teacher",
          selected: false,
          comment: "",
          key: "preferredBehavior",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    handleSubmit = (e) => {
      alert("Select appropriate menu to document behaviors");
    };
    handleChange = (e) => {
      this.setState({ value: e.targe.value });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Behaviors
            <selct value={this.state.value} onChange={this.handleChange}>
              <option value={behavior}></option>
            </selct>
          </label>
        </form>
      </div>
    );
  }
}
