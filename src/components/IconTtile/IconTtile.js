import React from "react";
import "./IconTtile.css";

const IconTtile = ({ icon, title }) => {
  return (
    <div className="title-container">
      <span className="title-icon">
        <img src={icon} alt="icon" />
      </span>
      <span>
        <h1 className="section-title-text">{title}</h1>
      </span>
    </div>
  );
};

export default IconTtile;
