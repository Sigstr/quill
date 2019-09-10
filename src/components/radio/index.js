import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const Radio = ({ checked, className, disabled, id, name, onChange, onClick }) => (
  <input
    checked={checked}
    className={`radio ${className}`}
    disabled={disabled}
    id={id}
    name={name}
    onChange={onChange}
    onClick={onClick}
    type="radio"
  />
);

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

Radio.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  name: null
};

export default Radio;
