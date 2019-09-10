import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const IconButton = ({ className, onClick }) => (
  <iconbutton
    className={`iconButton $className`}
    onClick={onClick ? onClick : () => { }}
  >
    {icon}
  </iconbutton>
);

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {
  className: null,
  icon: "more-horizontal"
};

export default IconButton;
