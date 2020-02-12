import PropTypes from "prop-types";
import React, { useState } from "react";

import { Menu } from "../Menu";
import { NavigationItem } from "./navigationItem";

import "./styles.css";

export const Navigation = ({ appswitcherItems, navigationItems, supportWebsiteURL, usermenuAvatar, usermenuItems }) => {

  // Appswitcher state
  const [isOpenAppswitcher, setOpenAppswitcher] = useState(false)

  const closeAppswitcher = () => {
    document.removeEventListener("click", closeAppswitcher, false);
    setOpenAppswitcher(false);
  };

  const openAppswitcher = () => {
    document.addEventListener("click", closeAppswitcher, false);
    setOpenAppswitcher(true);
  };

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

  const selectedApp = appswitcherItems.find(item => {
    let itemLocation = new URL(item.link);
    return itemLocation.hostname === window.location.hostname;
  });


  return (
    <nav className="navigation">
      <div>
        <div className="appswitcher">
          <button
            className="appswitcher-button"
            onClick={() => { isOpenAppswitcher ? closeAppswitcher() : openAppswitcher(); }}
          >
            <div>
              <svg className="appswitcher-terminuslogo" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.71815 12.2505L14.0657 10.7476C14.2493 10.6799 14.444 10.8164 14.444 11.013V23.7173C14.444 23.8734 14.318 24 14.1626 24H9.81513C9.65979 24 9.53378 23.8734 9.53378 23.7173V12.5158C9.53378 12.3973 9.6073 12.2914 9.71815 12.2505ZM0.000143069 15.7978V23.7172C0.000143069 23.8732 0.12616 23.9999 0.281499 23.9999H4.58695C4.74229 23.9999 4.8683 23.8732 4.8683 23.7172V14.3355C4.8683 14.144 4.6825 14.0079 4.50098 14.0663L0.195533 15.5288C0.0791001 15.5661 0.000143069 15.6749 0.000143069 15.7978ZM14.2887 0.345024L14.6557 2.12878L0.179513 7.16042C0.071233 7.20267 0 7.30729 0 7.42398V11.2094C0 11.4044 0.191957 11.5409 0.375046 11.4759L15.6714 6.17599L16.0038 7.63366C16.0543 7.85483 16.3304 7.92913 16.4841 7.763L21.9245 1.88375C22.0742 1.72193 21.9895 1.45778 21.774 1.4141L14.6186 0.00572015C14.4188 -0.0346629 14.2439 0.145121 14.2887 0.345024Z" fill="white" />
              </svg>
              <span className="appswitcher-caret">v</span>
            </div>
            <div className="appswitcher-label">
              {
                // Determine which text label to show on appswitcher
                selectedApp.title
              }
            </div>
          </button>
          {isOpenAppswitcher && (
            <Menu
              menuItems={appswitcherItems}
              selectedItem={selectedApp}
            />
          )}
        </div>
        {
          // Build primary navigation items
          navigationItems.map(
            ({ icon, isExternal, isLicensed, link, title }, i) => (
              <NavigationItem
                icon={icon}
                isExternal={isExternal}
                isLicensed={isLicensed}
                link={link}
                key={`${i} -${title}`}
                title={title}
              />
            )
          )
        }
      </div>
      <div>
        <NavigationItem icon="H" isExternal link={supportWebsiteURL} title="Support Website" />
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
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  navigationItems: PropTypes.arrayOf(Object).isRequired,
  supportWebsiteURL: PropTypes.string.isRequired,
  usermenuAvatar: PropTypes.object.isRequired,
  usermenuItems: PropTypes.arrayOf(Object).isRequired,
};
