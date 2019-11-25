import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick ? onClick : () => { }}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: ""
};
