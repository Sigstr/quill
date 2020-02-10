import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

// const NavigationItem = ({ icon, title, link, isExternal }) => {

//   // Determine if this is the current page and flip state
//   const isActive = true;
//   return (
//     <a className={`navigation-item ${isActive ? 'navigation-item-active' : null}`} href={link}>{icon}</a>
//   );
// };


export const Navigation = ({ items }) => {
  const navigationItems = items.map(item => <a href="#" class="navigation-item">{item.icon}</a>);
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
        <a href="#" class="navigation-item">H</a>
        <button class="navigation-usermenu">U</button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array
};
