import PropTypes from "prop-types";
import React from "react";
import d from "draper-css";

console.log(d);

import "./styles.css";

export const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ""
};
