import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

// TODO: Add seperator bar
const NavigationItem = ({ icon, title, link, isExternal }) => {

  // TODO:  Determine if this is the current page and flip state
  const isActive = false;

  // TODO: Add FontAwesome Support

  // TODO: Implement tooltip
  return (
    <a className={`navigation-item${isActive ? " navigation-item-active" : ""}`} href={link} target={isExternal ? "_blank" : ""}>{icon}</a>
  );
};


// TODO: Add Internal Tools
export const Navigation = ({ items, supportWebsiteURL }) => {
  const navigationItems = items.map(item => NavigationItem({ icon: item.icon, link: item.link }));
  console.log(navigationItems);
  return (
    <nav className="navigation">
      <div>
        <button className="appswitcher">
          <div>
            <img alt="T" src="" />
            <span>v</span>
          </div>
          <div class="appswitcher-label">Email</div>
        </button>
        {navigationItems}
      </div>
      <div>
        {NavigationItem({ icon: "H", title: "Support Website", link: supportWebsiteURL, isExternal: true })}
        <button class="navigation-usermenu">U</button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array
};
