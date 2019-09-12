import PropTypes from "prop-types";
import React from "react";

// import Label from '../Label';
// import { Colors } from '../../foundations/color'

import "./styles.css";

// remove and import after label merge
let Colors = {
  onyx: "#000000"
};

const MAX_SCORE = 100;
const LEVELS = 6;

const INTERVAL = MAX_SCORE / (LEVELS - 1);

const getScoreDetails = score => {
  if (score === 0) {
    return {
      color: Colors.onyx,
      description: "None",
      strength: 0
    };
  } else if (score <= INTERVAL) {
    return {
      color: Colors.onyx,
      description: "Weak",
      strength: 1
    };
  } else if (score <= INTERVAL * 2) {
    return {
      color: Colors.onyx,
      description: "Below Average",
      strength: 2
    };
  } else if (score <= INTERVAL * 3) {
    return {
      color: Colors.onyx,
      description: "Moderate",
      strength: 3
    };
  } else if (score <= INTERVAL * 4) {
    return {
      color: Colors.onyx,
      description: "Good",
      strength: 4
    };
  } else {
    // If score is greater than our INTERVAL * 4 always return strong
    return {
      color: Colors.onyx,
      description: "Strong",
      strength: 5
    };
  }
}

const generateBars = (scoreDetails) => {


  let bars = [];

  for (let i = 0; i < LEVELS - 1; i++) {
    bars.push(
      <div
        className="bar"
        css={{
          backgroundColor: scoreDetails.color,
          height: (i + 1) * 3,
          opacity: 1
        }}
      />
    );
  }

  return bars;

};

// Takes in a score and renders bars based on that score
const Signal = ({ score }) => {
  const scoreDetails = getScoreDetails(score);
  return (
    <>
      <div className="signal">{generateBars(scoreDetails)}</div>
      {/* todo: use a label for the score label */}
      <div>{scoreDetails.description}</div>
    </>
  );
}

Signal.propTypes = {
  showLabel: PropTypes.bool,
  score: PropTypes.number.isRequired
};

Signal.defaultProps = {
  showLabel: true,
  score: 0,
};

export default Signal;
