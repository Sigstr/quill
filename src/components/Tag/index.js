import PropTypes from "prop-types";
import React from "react";

import { BASALT, LIMESTONE, GRAPH_BLUE, TAG_BLUE, SIGSTR, MOSS } from "../../foundations/Color";

import "./styles.css";

const getStyles = theme => {
  if (theme === "grey") {
    return {
      color: BASALT,
      backgroundColor: LIMESTONE,
    };
  } else if (theme === "blue") {
    return {
      color: TAG_BLUE,
      backgroundColor: GRAPH_BLUE
    }
  } else if (theme === "green") {
    return {
      color: MOSS,
      backgroundColor: SIGSTR
    }
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
