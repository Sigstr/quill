import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const Radio = ({ checked, className, disabled, id, name, onBlur, onChange, onClick, onFocus }) => (
  <input
    checked={checked}
    className={`radio ${className}`}
    disabled={disabled}
    id={id}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onClick={onClick}
    onFocus={onFocus}
    type="radio"
  />
);

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func
};

Radio.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  name: null
};

export default Radio;
