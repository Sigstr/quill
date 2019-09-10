import PropTypes from "prop-types";
import React from "react";

import { MoreHorizontal } from "react-feather";

import "./styles.css";

const IconButton = ({ className, onClick }) => (
  <button
    className={`iconButton $className`}
    onClick={onClick ? onClick : () => { }}
  >
    <MoreHorizontal />
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {
  className: null
};

export default IconButton;
