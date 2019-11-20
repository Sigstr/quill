import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export const Tag = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

Tag.propTypes = {
  className: PropTypes.string
};

Tag.defaultProps = {
  className: ""
}
