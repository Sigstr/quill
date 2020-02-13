import PropTypes from "prop-types";
import React from "react";

import { Card } from "../Card";
import { MenuItem } from "./MenuItem";

import "./styles.css";

export const Menu = ({ menuItems, selectedItem }) => (
  <div className="menu">
    <Card className="elevation-2">
      {
        menuItems.map((item, index) =>
          <MenuItem
            {...item}
            isSelected={selectedItem === item}
            key={index}
          />)
      }
    </Card>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    isExternal: PropTypes.bool,
    isVisible: PropTypes.bool,
    isSelected: PropTypes.bool,
    link: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(["default", "header", "hr"])
  })).isRequired,
  selectedItem: PropTypes.object
};
