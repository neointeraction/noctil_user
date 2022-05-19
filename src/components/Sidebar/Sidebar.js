import React from "react";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import "./sidebar.css";

import { ReactComponent as Music } from "../../assets/images/icons/musicMenu.svg";
import { ReactComponent as Dashboard } from "../../assets/images/icons/dashboard.svg";
import { ReactComponent as Playlist } from "../../assets/images/icons/playlistMenu.svg";
import { ReactComponent as Settings } from "../../assets/images/icons/settings.svg";
import { ReactComponent as Help } from "../../assets/images/icons/help.svg";

import CollapseMenu from "./components/CollapseMenu";
import {
  menuMusic,
  menuPlaylist,
  menuSettings,
} from "./components/config/sidebar.config";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const openSidepanel = () => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 200);
  };

  const closeSidepanel = () => {
    setMenuOpen(false);
  };

  // active state of sidepanel icons
  const url = pathname.split("/");
  const isActiveMusic =
    url[1] === "albums" || url[1] === "add-album" || url[1] === "album-detail";
  const isActivePalylist = url[1] === "match-status";
  const isActiveUserAccess = url[1] === "users" || url[1] === "user-detail";

  return (
    <div
      className={`sidebar-container ${
        menuOpen ? "open" : menuOpen === false ? "close" : "initial"
      }`}
      onMouseEnter={openSidepanel}
      onMouseLeave={closeSidepanel}
    >
      <ul className="side-menu">
        <li className={`${url[1] === "dashboard" ? "active" : ""}`}>
          <Link to="/dashboard">
            <Tooltip
              className="custon-toolip"
              title="Dashboard"
              arrow
              placement="right"
              TransitionComponent={Zoom}
              disableHoverListener={true}
            >
              <div className="menu-item menu-item-first">
                <span className="menu-icon">
                  <Dashboard className="icon-sidenav" fill="#DCDEDF" />
                </span>
                <span className="menu-text">DASHBOARD</span>
              </div>
            </Tooltip>
          </Link>
        </li>
        <CollapseMenu
          menuName="MUSIC"
          menuIcon={<Music className="icon-sidenav" fill="#DCDEDF" />}
          innerMenu={menuMusic}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isActive={isActiveMusic ? "active" : ""}
          url={url[1]}
        />
        <CollapseMenu
          menuName="PLAYLIST MATCH"
          menuIcon={<Playlist className="icon-sidenav" fill="#DCDEDF" />}
          innerMenu={menuPlaylist}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isActive={isActivePalylist ? "active" : ""}
          url={url[1]}
        />
        <CollapseMenu
          menuName="DATA MANAGE"
          menuIcon={<Settings className="icon-sidenav" fill="#DCDEDF" />}
          innerMenu={menuSettings}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isActive={isActiveUserAccess ? "active" : "inactive"}
          url={url[1]}
        />
        <li>
          <Link to="/">
            <Tooltip
              className="custon-toolip"
              title="Help"
              arrow
              placement="right"
              TransitionComponent={Zoom}
              disableHoverListener={true}
            >
              <div className="menu-item menu-item-first">
                <span className="menu-icon">
                  <Help className="icon-sidenav" fill="#DCDEDF" />
                </span>
                <span className="menu-text">HELP</span>
              </div>
            </Tooltip>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
