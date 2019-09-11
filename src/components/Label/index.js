import PropTypes from "prop-types";
import React from "react";

import { Colors } from "../../foundations/Color/index.js"

import "./styles.css";

const Label = ({ color, text }) => (
  <div
    className="label"
    style={{ color: color }}
  >
    {text}
  </div>
);

Label.propTypes = {
  color: PropTypes.Colors,
  text: PropTypes.string
};

Label.defaultProps = {
  color: Colors.onyx,
  text: ""
};

export default Label;
