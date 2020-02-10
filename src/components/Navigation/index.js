import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export const Navigation = ({ children, className, disabled, onClick }) => (
  <nav className="navigation">
    <div className="app-switcher">T</div>
    <div className="navigation-primary">
      <div class="navigation-item">A</div>
      <div class="navigation-item">B</div>
      <div class="navigation-item">C</div>
    </div>
    <div className="navigation-secondary">
      <div class="navigation-item">H</div>
      <div class="navigation-usermenu">U</div>
    </div>
  </nav>
);

Navigation.propTypes = {
  pages: PropTypes.array
};
