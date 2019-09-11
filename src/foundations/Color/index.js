import React from "react";

export const Colors = {
  basalt: "#3D4D54",
  blue: "#76B8FF",
  chalk: "#F2F4F5",
  error: "#D13842",
  graph_blue: "#00CCFF",
  graph_pink: "#FF6EE3",
  graph_yellow: "#FFD26E",
  leaf: "#75C97B",
  limestone: "#DEE1E3",
  marble: "#ECECEC",
  moss: "#2E7533",
  onyx: "#1B262B",
  orange: "#FFAE76",
  purple: "#885FBD",
  red: "#FF8276",
  sigstr: "#4aa951",
  slate: "#6A7173",
  tag_blue: "#005D7D",
  tag_yellow: "#856D39",
  tufa: "#ACB3B6",
  yellow: "#FFC74C"
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

export default Colors;
