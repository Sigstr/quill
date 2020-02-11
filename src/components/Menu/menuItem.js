import PropTypes from "prop-types";
import React from "react";

// TODO: Add separator bar
// TODO: Add header
export const MenuItem = ({ icon, isExternal, isLicensed, link, title }) => {

  if (!isLicensed) return null;

  // TODO: Add FontAwesome Support
  return (
    <div className="menu-item">
      <span>{icon}</span>
      <a href={link} target={isExternal ? "_blank" : ""}>{title}</a>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  isLicensed: PropTypes.bool,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
  isExternal: false,
  isLicensed: true
};
