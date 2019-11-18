import PropTypes from "prop-types";
import React from "react";

import { BASALT, TUFA, GRAPH_BLUE, TAG_BLUE, SIGSTR, MOSS } from "../../foundations/Color";

import "./styles.css";

const getStyles = theme => {

  let themeStyles = {};

  // Defaults to a grey tag
  switch (theme) {
    case "blue":
      themeStyles = {
        color: TAG_BLUE,
        backgroundColor: GRAPH_BLUE
      };
      break;

    case "green":
      themeStyles = {
        color: MOSS,
        backgroundColor: SIGSTR
      };
      break;

    default:
      themeStyles = {
        color: BASALT,
        backgroundColor: TUFA
      };
      break;
  }

  // Set background opacity to .24
  themeStyles.backgroundColor += "24";

  return themeStyles;
};

export const Tag = ({ theme, children }) => {
  const styles = getStyles(theme);
  return (
    <div className="tag" style={{ color: styles.color, backgroundColor: styles.backgroundColor }}>{children}</div>
  );
};

Tag.propTypes = {
  theme: PropTypes.string
};
