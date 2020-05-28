import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, onChange }) => (
  <input type="checkbox" name={name} onChange={onChange} />
);

export default Checkbox;
