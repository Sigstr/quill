import PropTypes from "prop-types";
import React from "react";

// import Label from '../Label';
import { BASALT, RED, ORANGE, YELLOW, LEAF } from '../../foundations/Color'

import "./styles.css";

const MAX_SCORE = 100;
const LEVELS = 6;

const INTERVAL = MAX_SCORE / (LEVELS - 1);

const getScoreDetails = score => {
  if (score === 0) {
    return {
      color: BASALT,
      description: "None",
      strength: 0
    };
  } else if (score <= INTERVAL) {
    return {
      color: BASALT,
      description: "Weak",
      strength: 1
    };
  } else if (score <= INTERVAL * 2) {
    return {
      color: RED,
      description: "Below Average",
      strength: 2
    };
  } else if (score <= INTERVAL * 3) {
    return {
      color: ORANGE,
      description: "Moderate",
      strength: 3
    };
  } else if (score <= INTERVAL * 4) {
    return {
      color: YELLOW,
      description: "Good",
      strength: 4
    };
  } else {
    // If score is greater than our INTERVAL * 4 always return strong
    return {
      color: LEAF,
      description: "Strong",
      strength: 5
    };
  }
}

const generateBars = (scoreDetails) => {

  let bars = [];

  for (let i = 0; i < LEVELS - 1; i++) {

    // Calculate opacity for an individual bar
    const opacity = i >= scoreDetails.strength ? 0.32 : 1;

    bars.push(
      <div
        className="bar"
        key={i}
        style={{
          backgroundColor: scoreDetails.color,
          height: (i + 1) * 3,
          opacity: opacity
        }}
      />
    );
  }

  return bars;

};

const Signal = ({ score, showLabel }) => {
  const scoreDetails = getScoreDetails(score);
  return (
    <>
      <div className="signal">{generateBars(scoreDetails)}</div>
      {showLabel && (
        // TODO: use a Label here
        <div>{scoreDetails.description}</div>
      )}
    </>
  );
}

Signal.propTypes = {
  score: PropTypes.number.isRequired,
  showLabel: PropTypes.bool
};

Signal.defaultProps = {
  score: 0,
  showLabel: true
};

export default Signal;
