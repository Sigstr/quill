import PropTypes from "prop-types";
import React from "react";

import { Colors } from "../../foundations/Color"

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
  color: PropTypes.string,
  text: PropTypes.string
};

Label.defaultProps = {
  color: Colors.onyx,
  text: "Label Text"
};

export default Label;
