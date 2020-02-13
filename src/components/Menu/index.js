import PropTypes from "prop-types";
import React from "react";

import { Card } from "../Card";
import { MenuItem } from "./menuItem";

import "./styles.css";

export const Menu = ({ menuItems, selectedItem }) => (
  <div className="menu">
    <Card className="elevation-2">
      {
        // Build menu items
        menuItems.map(
          ({ icon, isExternal, isLicensed, link, title, type }, i) => (
            <MenuItem
              icon={icon}
              isExternal={isExternal}
              isLicensed={isLicensed}
              isSelected={selectedItem === menuItems[i]}
              key={title}
              link={link}
              title={title}
              type={type}
            />
          )
        )
      }
    </Card>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(Object).isRequired,
  selectedItem: PropTypes.object
};
