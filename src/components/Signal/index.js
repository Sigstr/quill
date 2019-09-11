import PropTypes from "prop-types";
import React from "react";

// import Label from '../Label';

import "./styles.css";

const MAX = 100;

const generateBars = () => (
  <>
    <div>i</div>
    <div>i</div>
    <div>i</div>
    <div>i</div>
    <div>i</div>
  </>
);

const Signal = ({ value }) => {
  // Takes in a score and renders bars based on that score
  return (
    <>
      <div className="signal">{generateBars()}</div>
      <div>Strong</div>
    </>
  );
};

Signal.propTypes = {
  showLabel: PropTypes.bool,
  value: PropTypes.number.isRequired
};

Signal.defaultProps = {
  showLabel: true,
  value: 0,
};

export default Signal;
