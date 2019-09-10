import PropTypes from "prop-types";
import React from "react";

import { MoreHorizontal } from "react-feather";

import "./styles.css";

const IconButton = ({ className, onClick }) => (
  <iconbutton
    className={`iconButton $className`}
    onClick={onClick ? onClick : () => { }}
  >
    <MoreHorizontal />
  </iconbutton>
);

IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {
  className: null
};

export default IconButton;
