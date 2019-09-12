import PropTypes from "prop-types";
import React from "react";

// import Label from '../Label';

import "./styles.css";

const MAX_SCORE = 100;
const LEVELS = 6;

const INTERVAL = MAX_SCORE / (LEVELS - 1);

const generateBars = () => (
  <>
    <div>i</div>
    <div>i</div>
    <div>i</div>
    <div>i</div>
    <div>i</div>
  </>
);

const generateDescription = score => {
  if (score == 0) return "None";
  if (score <= INTERVAL) return "Weak";
  if (score <= INTERVAL * 2) return "Below Average";
  if (score <= INTERVAL * 3) return "Moderate";
  if (score <= INTERVAL * 4) return "Good";
  if (score <= INTERVAL * 5) return "Strong";
  return;
}

// Takes in a score and renders bars based on that score
const Signal = ({ score }) => (
  <>
    <div className="signal">{generateBars()}{score}</div>
    {/* todo: use a label for the score label */}
    <div>{generateDescription(score)}</div>
  </>
);

Signal.propTypes = {
  showLabel: PropTypes.bool,
  score: PropTypes.number.isRequired
};

Signal.defaultProps = {
  showLabel: true,
  score: 0,
};

export default Signal;
