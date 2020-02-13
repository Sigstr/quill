import PropTypes from "prop-types";
import React from "react";

import { Card } from "../Card";
import { MenuItem } from "./menuItem";

import "./styles.css";

export const Menu = ({ menuItems, selectedItem }) => (
  <div className="menu">
    <Card className="elevation-2">
      {
        menuItems.map((item, index) =>
          <MenuItem
            {...item}
            isSelected={selectedItem === menuItems[index]}
          />)
      };
    </Card>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(Object).isRequired,
  selectedItem: PropTypes.object
};
