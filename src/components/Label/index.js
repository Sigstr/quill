import PropTypes from "prop-types";
import React from "react";

import { ONYX, ERROR } from "../../foundations/Color";

import "./styles.css";

export const Label = ({ color, children, isRequired }) => (
  <div className="label" style={{ color: color }}>
    {children}
    {isRequired && (
      <span style={{ color: ERROR }}>*</span>
    )}
  </div>
);

Label.propTypes = {
  color: PropTypes.string,
  isRequired: PropTypes.bool
};

Label.defaultProps = {
  color: ONYX,
  isRequired: false
};
