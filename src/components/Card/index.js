import PropTypes from "prop-types";
import React from "react";
import "draper-css/src/card/style.css";

export const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ""
};
