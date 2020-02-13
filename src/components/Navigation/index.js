import PropTypes from "prop-types";
import React, { useState } from "react";

import { Menu } from "../Menu";

import { AppSwitcher } from "./appSwitcher";
import { NavigationItem } from "./navigationItem";

import "./styles.css";

export const Navigation = ({ appswitcherItems, navigationItems, supportWebsiteURL, usermenuAvatar, usermenuItems }) => {

  // Usermenu state
  const [isOpenUsermenu, setOpenUsermenu] = useState(false)

  const closeUsermenu = () => {
    document.removeEventListener("click", closeUsermenu, false);
    setOpenUsermenu(false);
  };

  const openUsermenu = () => {
    document.addEventListener("click", closeUsermenu, false);
    setOpenUsermenu(true);
  };

  return (
    <nav className="navigation">
      <div>
        <AppSwitcher appswitcherItems={appswitcherItems} />
        {
          // Build primary navigation items
          navigationItems.map(
            ({ icon, isExternal, isLicensed, link, title, type }, i) => (
              <NavigationItem
                icon={icon}
                isExternal={isExternal}
                isLicensed={isLicensed}
                link={link}
                key={`${i} -${title}`}
                title={title}
                type={type}
              />
            )
          )
        }
      </div>
      <div>
        <NavigationItem icon="H" isExternal link={supportWebsiteURL} title="Support Website" />
        <div style={{ position: "relative" }}>
          <button
            className="navigation-usermenu tooltip-anchor"
            onClick={() => { isOpenUsermenu ? closeUsermenu() : openUsermenu(); }}>
            {usermenuAvatar}
          </button>
          <span className="navigation-usermenu-caret">></span>
          <div className="tooltip">User Settings</div>
          {isOpenUsermenu && (
            <Menu menuItems={usermenuItems} />
          )}
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  appswitcherItems: PropTypes.arrayOf(Object).isRequired,
  navigationItems: PropTypes.arrayOf(Object).isRequired,
  supportWebsiteURL: PropTypes.string.isRequired,
  usermenuAvatar: PropTypes.object.isRequired,
  usermenuItems: PropTypes.arrayOf(Object).isRequired,
};
