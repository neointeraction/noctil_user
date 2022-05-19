import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigate, useLocation } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

import "./header.css";

import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/icons/menu-down.svg";
import Panel from "../../assets/images/icons/panel.svg";
import Tab from "../../assets/images/icons/tab.svg";

const Header = ({
  menuOpen,
  setMenuOpen,
  toggleViewPanel,
  setToggleViewPanel,
}) => {
  const [showToggler, setShowToggler] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  let navigate = useNavigate();

  const signOut = () => {
    Auth.signOut();
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageView = () => {
    setToggleViewPanel(!toggleViewPanel);
  };

  const url = pathname.split("/");

  useEffect(() => {
    url[1] === "album-detail" ? setShowToggler(true) : setShowToggler(false);
  }, [url]);

  return (
    <div className="header-container">
      <div className="menu-logo">
        <div className="ham-container">
          <div class="menu-link-wrapper" onClick={handleMenuOpen}>
            <div class={`menu-link ${menuOpen ? "menu-trigger-open" : ""}`}>
              <span class="lines"></span>
            </div>
          </div>
        </div>

        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-right-flex">
        {showToggler && (
          <>
            {toggleViewPanel ? (
              <div className="toggle-panel-switch" onClick={handlePageView}>
                <Tooltip
                  className="custon-toolip"
                  title="Tab View"
                  arrow
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <img src={Tab} alt="Tab" />
                </Tooltip>
              </div>
            ) : (
              <div className="toggle-panel-switch" onClick={handlePageView}>
                <Tooltip
                  className="custon-toolip"
                  title="Panel View"
                  arrow
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <img src={Panel} alt="Panel" />
                </Tooltip>
              </div>
            )}
          </>
        )}

        <div className="profile-block" onClick={handleClick}>
          <Avatar>R</Avatar>
          <div className="name-tag">
            <span className="p-user-name">Rob Hawkins</span>
            <Chip label="User" size="small" className="custom-chip" />
          </div>
          <span className="menu-arrow">
            <img src={Arrow} alt="Arrow" />
          </span>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          disableRipple
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.10))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem disableRipple onClick={signOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
