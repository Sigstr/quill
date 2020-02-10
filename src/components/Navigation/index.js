import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export const Navigation = ({ children, className, disabled, onClick }) => (
  <nav className="navigation">
    <div>
      <button className="appswitcher">
        <div>
          <img alt="T" src="" />
          <span>v</span>
        </div>
        <div class="appswitcher-label">Email</div>
      </button>
      <a href="#" class="navigation-item">A</a>
      <a href="#" class="navigation-item">B</a>
      <a href="#" class="navigation-item">C</a>
    </div>
    <div>
      <a href="#" class="navigation-item">H</a>
      <button class="navigation-usermenu">U</button>
    </div>
  </nav>
);

Navigation.propTypes = {
  pages: PropTypes.array
};
