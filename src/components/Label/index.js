import PropTypes from "prop-types";
import React from "react";

import { ONYX } from "../../foundations/Color";

import "./styles.css";

export const Label = ({ color, children }) => (
  <div className="label" style={{ color: color }}>
    {children}
  </div>
);

Label.propTypes = {
  color: PropTypes.string
};

Label.defaultProps = {
  color: ONYX
};
