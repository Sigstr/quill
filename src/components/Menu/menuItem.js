import PropTypes from "prop-types";
import React from "react";

// TODO: Positioning in relation to the anchor element
// TODO: Allowing menu items to take on click events as buttons instead of just acting as links

export const MenuItem = ({ icon, isExternal, isLicensed, isSelected, link, title, type }) => {

  if (type == "hr") return (<hr className="menu-hr"></hr>);

  if (!isLicensed) return null;

  if (type == "header") return (<div className="menu-header">{title}</div>);

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
  isSelected: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf("default", "header", "hr")
};

MenuItem.defaultProps = {
  isExternal: false,
  isLicensed: true,
  isSelected: false,
  type: "default"
};
