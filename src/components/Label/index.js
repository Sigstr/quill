import PropTypes from "prop-types";
import React from "react";

import { ONYX, ERROR } from "../../foundations/Color";

import "./styles.scss";

export const Label = ({ color, children, required }) => (
  <div className="label" style={{ color: color }}>
    {children}
    {required && (
      <span style={{ color: ERROR }}>*</span>
    )}
  </div>
);

Label.propTypes = {
  color: PropTypes.string,
  required: PropTypes.bool
};

Label.defaultProps = {
  color: ONYX,
  isRequired: false
};
