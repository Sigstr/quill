import PropTypes from "prop-types";
import React from "react";

import { Colors } from "../../foundations/Color"

import "./styles.css";

const Label = ({ color, children }) => (
  <label
    className="label"
    style={{ color: color }}
  >
    {children}
  </label>
);

Label.propTypes = {
  color: PropTypes.string
};

Label.defaultProps = {
  color: Colors.onyx
};

export default Label;
