import PropTypes from "prop-types";
import React from "react";

import { AppSwitcher } from "./appSwitcher";
import { UserMenu } from "./userMenu";
import { NavigationItem } from "./navigationItem";

import "./styles.css";

export const Navigation = ({ appswitcherItems, navigationItems, supportWebsiteURL, usermenuAvatar, usermenuItems }) => {

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
        <UserMenu usermenuItems={usermenuItems} usermenuAvatar={usermenuAvatar} />
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
