import React, { useState } from "react";
import { Tabs, DragTabList, DragTab, PanelList, Panel } from "react-tabtab";
import { simpleSwitch } from "react-tabtab/lib/helpers/move";

import "./draggable-tab.css";

import {
  TabListStyled,
  ActionButtonStyled,
  TabStyled,
  PanelStyled,
} from "./theme.styles";

const UserDetail = ({ tabs }) => {
  const [tab, setTab] = useState(tabs);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  const handleTabSequenceChange = ({ oldIndex, newIndex }) => {
    const updateTabs = simpleSwitch(tab, oldIndex, newIndex);
    setTab(updateTabs);
    setActiveIndex(newIndex);
  };

  const handleEdit = ({ type, index }) => {
    if (type === "delete") {
      setTab([...tab.slice(0, index), ...tab.slice(index + 1)]);
    }
    if (index - 1 >= 0) {
      setActiveIndex(index - 1);
    } else {
      setActiveIndex(0);
    }
  };

  const tabTemplate = [];
  const panelTemplate = [];

  tab.forEach((tab, i) => {
    tabTemplate.push(
      <DragTab key={i} closable={true} id="tab-item">
        {tab.title}
      </DragTab>
    );
    panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
  });

  return (
    <div className="draggable-tab-container">
      <Tabs
        activeIndex={activeIndex}
        onTabEdit={handleEdit}
        onTabChange={handleTabChange}
        onTabSequenceChange={handleTabSequenceChange}
        showModalButton={false}
        customStyle={{
          TabList: TabListStyled,
          ActionButton: ActionButtonStyled,
          Tab: TabStyled,
          Panel: PanelStyled,
        }}
      >
        <DragTabList className="tab-item">{tabTemplate}</DragTabList>
        <PanelList>{panelTemplate}</PanelList>
      </Tabs>
    </div>
  );
};

export default UserDetail;
