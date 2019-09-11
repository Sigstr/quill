import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

const Signal = ({ strength }) => (
  <div />
);

Signal.propTypes = {
  strength: PropTypes.number
};

Signal.defaultProps = {
  strength: 0,
};

export default Signal;
