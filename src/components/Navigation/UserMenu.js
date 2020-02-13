import PropTypes from "prop-types";
import React, { useState } from "react";

import { Menu } from '../Menu';

export const UserMenu = ({ usermenuItems, usermenuAvatar }) => {

  // Usermenu state
  const [isOpenUsermenu, setOpenUsermenu] = useState(false)

  const closeUsermenu = () => {
    document.removeEventListener("click", closeUsermenu, false);
    setOpenUsermenu(false);
  };

  const openUsermenu = () => {
    document.addEventListener("click", closeUsermenu, false);
    setOpenUsermenu(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className="navigation-usermenu tooltip-anchor"
        onClick={() => { isOpenUsermenu ? closeUsermenu() : openUsermenu(); }}>
        {usermenuAvatar}
      </button>
      <span className="navigation-usermenu-caret">></span>
      <div className="tooltip">User Settings</div>
      {isOpenUsermenu && (
        <Menu menuItems={usermenuItems} />
      )}
    </div>
  );
};

UserMenu.propTypes = {
  usermenuItems: PropTypes.arrayOf(Object).isRequired,
  usermenuAvatar: PropTypes.object.isRequired,
};
