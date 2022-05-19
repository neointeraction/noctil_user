import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Arrow from "../../../../assets/images/icons/arrow-down.svg";

const CollapseMenu = ({
  menuName,
  menuIcon,
  innerMenu,
  isActive,
  menuOpen,
  setMenuOpen,
  url,
}) => {
  const [expand, setExpand] = useState(false);

  const handleMenuCollapse = () => {
    setExpand(!expand);
  };

  const handleSideNav = () => {
    setTimeout(() => {
      menuOpen && setMenuOpen(false);
    }, 600);
  };

  // prettier-ignore
  // active state of sidepanel menu items
  const highlightItems = (menu) => {
    if (
      ((url === "albums" || url === "add-album" || url === "album-detail") && menu === "Albums") ||
      ((url === "match-status")  && menu === "Match Status") ||
      ((url === "import-export" || url === "new-export" || url === "import-export-clone") && menu === "Export / Import") || 
      ((url === "reports" || url === "new-report" || url === "reports-clone") && menu === "Reports") ||
      ((url === "match-iq" || url === "new-match-iq" || url === "match-iq-clone") && menu === "Match IQ") ||
      ((url === "features" || url === "new-feature" || url === "feature-clone") && menu === "Feature") ||
      ((url === "merges" || url === "new-merge" || url === "merge-clone") && menu === "Merge") ||
      ((url === "users" || url === "new-user" || url === "user-detail") && menu === "Users") ||
      ((url === "accounts" || url === "new-account") && menu === "Accounts") ||
      ((url === "domains" || url === "new-domain") && menu === "Workspace") ||
      ((url === "modules" || url === "new-module") && menu === "Modules")
    ) {
      return true;
    }
  };

  return (
    <li className={`custom-accordian ${isActive}`}>
      <Tooltip
        className="custon-toolip"
        title={menuName.toLowerCase()}
        arrow
        placement="right"
        TransitionComponent={Zoom}
        disableHoverListener={true}
      >
        <div
          className="label-block menu-item"
          onClick={() => handleMenuCollapse("config")}
        >
          {menuIcon && (
            <span className="menu-icon">
              {/* <img src={menuIcon} alt="menuIcon" /> */}
              {menuIcon}
            </span>
          )}

          <span className="menu-text">{menuName}</span>
          <span className={`collapse-arrow ${expand ? "up" : ""}`}>
            <img src={Arrow} alt="Arrow" />
          </span>
        </div>
      </Tooltip>

      {expand && (
        <div className={`collapse-body ${expand ? "open" : "closed"}`}>
          <ul className="inner-menu-list">
            {innerMenu.map((item) => (
              <>
                {!item.subMenu && (
                  <Link to={item.link} onClick={handleSideNav}>
                    <Tooltip
                      className="custon-toolip"
                      title={item.menuItem.toLowerCase()}
                      arrow
                      placement="right"
                      TransitionComponent={Zoom}
                      disableHoverListener={true}
                    >
                      <li
                        className={`${
                          highlightItems(item.menuItem) ? "active-child" : ""
                        }`}
                      >
                        {item.menuItem}
                      </li>
                    </Tooltip>
                  </Link>
                )}
                {item.subMenu && (
                  <ul className="inner-sub-collapse">
                    <CollapseMenu
                      menuName={item.menuItem}
                      innerMenu={item.subMenu}
                      menuOpen={menuOpen}
                      url={url}
                      setMenuOpen={setMenuOpen}
                    />
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default CollapseMenu;
