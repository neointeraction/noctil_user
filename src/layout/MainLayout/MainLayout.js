import { Outlet } from "react-router-dom";
import "./layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import React, { useState } from "react";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState();
  const [toggleViewPanel, setToggleViewPanel] = useState(false);

  return (
    <div className="layouts">
      <div className="layout-right">
        <Header
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          toggleViewPanel={toggleViewPanel}
          setToggleViewPanel={setToggleViewPanel}
        />
        <div className="layout">
          <div className="layout-left">
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="layout-main">
            <Outlet context={[toggleViewPanel, setToggleViewPanel]} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
