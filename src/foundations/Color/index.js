import React from "react";

// NEUTRALS
export const ONYX = "#1b262b";
export const SLATE = "#6a7173";
export const LIMESTONE = "#dee1e3";
export const MARBLE = "#ececec";
export const CHALK = "#f2f4f5";
export const BASALT = "#3d4d54";
export const TUFA = "#acb3b6";

// COLORS
export const BLUE = "#76b8ff";
export const ERROR = "#d13842"; // TODO make sure that error and red are obviously different
export const GRAPH_BLUE = "#00ccff";
export const GRAPH_PINK = "#ff6ee3";
export const GRAPH_YELLOW = "#ffd26e";
export const LEAF = "#75c97b";
export const MOSS = "#2e7533";
export const ORANGE = "#ffae76";
export const PURPLE = "#885fbd";
export const RED = "#ff8276";
export const SIGSTR = "#4aa951";
export const TAG_GREEN = "#386f3c";
export const TAG_BLUE = "#005d7d";
export const YELLOW = "#ffc74c";
export const TAG_YELLOW = "#856d39";

const Colors = {
  basalt: BASALT,
  blue: BLUE,
  chalk: CHALK,
  error: ERROR,
  graph_blue: GRAPH_BLUE,
  graph_pink: GRAPH_PINK,
  graph_yellow: GRAPH_YELLOW,
  leaf: LEAF,
  limestone: LIMESTONE,
  marble: MARBLE,
  moss: MOSS,
  onyx: ONYX,
  orange: ORANGE,
  purple: PURPLE,
  red: RED,
  sigstr: SIGSTR,
  slate: SLATE,
  tag_blue: TAG_BLUE,
  tag_yellow: TAG_YELLOW,
  tufa: TUFA,
  yellow: YELLOW
};

export const ColorBlock = ({ hex, label }) => {
  return (
    <div
      style={{
        width: 160,
        marginRight: 32,
        marginBottom: 48
      }}
    >
      <div
        style={{
          height: 96,
          width: 160,
          backgroundColor: hex,
          marginBottom: 12,
          borderRadius: 3
        }}
      ></div>
      <div>{label}</div>
      <div>{hex}</div>
    </div>
  );
};

export const ColorGroup = () => {
  const blocks = Object.entries(Colors).map(([key, value]) => (
    <ColorBlock hex={value} label={key} />
  ));
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {blocks}
    </div>
  );
};
