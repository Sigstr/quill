import PropTypes from "prop-types";
import React from "react";

import { AppSwitcher } from "./appSwitcher";
import { UserMenu } from "./userMenu";
import { NavigationItem } from "./navigationItem";

import "./styles.css";

const PrimaryNavigationItems = ({ primaryNavigationItems }) => {
  return (
    primaryNavigationItems.map((item) => (
      <NavigationItem
        {...item}
      />
    ))
  );
}

export const Navigation = ({ appswitcherItems, primaryNavigationItems, supportWebsiteURL, usermenuAvatar, usermenuItems }) => (
  <nav className="navigation">
    <div>
      <AppSwitcher appswitcherItems={appswitcherItems} />
      <PrimaryNavigationItems primaryNavigationItems={primaryNavigationItems} />
    </div>
    <div>
      <NavigationItem icon="H" isExternal link={supportWebsiteURL} title="Support Website" />
      <UserMenu usermenuItems={usermenuItems} usermenuAvatar={usermenuAvatar} />
    </div>
  </nav>
);

Navigation.propTypes = {
  appswitcherItems: PropTypes.arrayOf(Object).isRequired,
  navigationItems: PropTypes.arrayOf(Object).isRequired,
  supportWebsiteURL: PropTypes.string.isRequired,
  usermenuAvatar: PropTypes.object.isRequired,
  usermenuItems: PropTypes.arrayOf(Object).isRequired,
};
