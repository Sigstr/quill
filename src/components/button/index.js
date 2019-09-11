import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const Button = ({ children, className, onClick }) => (
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

export default Button;
