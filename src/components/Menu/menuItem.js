import PropTypes from "prop-types";
import React from "react";

// TODO: Add separator bar
// TODO: handle appswitcher licensing different than basic menus 
// TODO: Add category headers for menus
export const MenuItem = ({ icon, isExternal, isLicensed, isSelected, link, title }) => {

  if (!isLicensed) return null;

  // TODO: Add FontAwesome Support
  return (
    <a className="menu-item" href={link} target={isExternal ? "_blank" : ""}>
      <div>
        {icon && (
          <span className="menu-item-icon">{icon}</span>
        )}
        <span className="menu-item-title">{title}</span>
      </div>
      <div>
        {isSelected && (
          <span className="menu-item-icon menu-item-checked">✓</span>
        )}
      </div>
    </a>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  isExternal: PropTypes.bool,
  isLicensed: PropTypes.bool,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
};

MenuItem.defaultProps = {
  isExternal: false,
  isLicensed: true,
  isSelected: false
};
