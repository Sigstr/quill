import PropTypes from "prop-types";
import React from "react";

// import Label from '../Label';

import "./styles.css";

const Signal = ({ strength }) => (
  <>
    <div>
      bars
    </div>
    <div>Strong</div>
  </>
);

Signal.propTypes = {
  showLabel: PropTypes.bool,
  strength: PropTypes.number.isRequired
};

Signal.defaultProps = {
  showLabel: true,
  strength: 0,
};

export default Signal;
