import PropTypes from "prop-types";
import React from "react";

export const NavigationItem = ({ icon, isExternal, isVisible, link, title, type }) => {

  // Determines if this is the current page and to give navigation item an active state
  // TODO: Works with router
  const isActive = link === '/' + window.location.pathname.split('/')[1];

  if (type === "hr") return (<hr className="navigation-hr"></hr>);

  if (!isVisible) return null;

  // TODO: Add FontAwesome Support
  // TODO: Make a tooltip component
  return (
    <div style={{ position: "relative" }}>
      <a className={`navigation-item tooltip-anchor${isActive ? " navigation-item-active" : ""}`} href={link} target={isExternal ? "_blank" : ""}>{icon}</a>
      <div className="tooltip">{title}</div>
    </div>
  );
};

NavigationItem.propTypes = {
  icon: PropTypes.string,
  isExternal: PropTypes.bool,
  isVisible: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["default", "hr"]).isRequired
};

NavigationItem.defaultProps = {
  isExternal: false,
  isVisible: true,
  type: "default"
};
