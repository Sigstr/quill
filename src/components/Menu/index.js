import PropTypes from "prop-types";
import React from "react";

import { Card } from "../Card";
import { MenuItem } from "./menuItem";

import "./styles.css";

export const Menu = ({ menuItems }) => (
  <div className="menu">
    <Card className="elevation-2">
      {
        // Build menu items
        menuItems.map(
          ({ icon, isExternal, isLicensed, link, title }, i) => (
            <MenuItem
              icon={icon}
              isExternal={isExternal}
              isLicensed={isLicensed}
              link={link}
              key={`${i} -${title}`}
              title={title}
            />
          )
        )
      }
    </Card>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(Object).isRequired
};
