import PropTypes from "prop-types";
import React from "react";

import { ONYX } from "../../foundations/Color"

import "./styles.css";

const Label = ({ color, text }) => (
  <label
    className="label"
    style={{ color: color }}
  >
    {text}
  </label>
);

Label.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Label.defaultProps = {
  color: ONYX,
  text: ""
};

export default Label;
