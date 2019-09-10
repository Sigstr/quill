import PropTypes from "prop-types";
import React from "react";

import { MoreHorizontal } from "react-feather";

import "./styles.css";

const IconButton = ({ className, onClick, title }) => (
  <button
    className={`iconButton $className`}
    onClick={onClick ? onClick : () => { }}
    title={title}
  >
    <MoreHorizontal />
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

IconButton.defaultProps = {
  className: null
};

export default IconButton;
