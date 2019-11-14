import PropTypes from "prop-types";
import React from "react";

import { BASALT, LIMESTONE } from "../../foundations/Color";

import "./styles.css";

const getStyles = theme => {
  if (theme === "grey") {
    return {
      color: BASALT,
      backgroundColor: LIMESTONE,
    };
  }
};

export const Tag = ({ theme }) => {
  const styles = getStyles(theme);
  return (
    <div className="tag" style={{ color: styles.color, backgroundColor: styles.backgroundColor }}>tag text</div>
  );
};

Tag.propTypes = {
  theme: PropTypes.string.isRequired
};

Tag.defaultProps = {
  theme: "grey",
};
