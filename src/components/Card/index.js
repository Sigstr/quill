import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: "card"
};

export default Card;
