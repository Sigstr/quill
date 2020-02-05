import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export const Button = ({ children, className, disabled, onClick }) => (
  <button disabled={disabled} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: "",
  disabled: false
};
