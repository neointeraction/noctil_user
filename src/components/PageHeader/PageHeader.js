import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./page-header.css";

const PageHeader = ({ pageTitle, pageSubText, breadCrumb }) => {
  return (
    <div className="page-header-block">
      <Breadcrumbs aria-label="breadcrumb">
        {breadCrumb.map((item) =>
          item.link ? (
            <RouterLink to={item.link}>
              <p className="breadcrumb-text">{item.name}</p>
            </RouterLink>
          ) : (
            <p className="breadcrumb-text">{item.name}</p>
          )
        )}
      </Breadcrumbs>
      <h1 className="page-title">{pageTitle}</h1>
      <h4 className="page-sub-text">{pageSubText}</h4>
    </div>
  );
};

export default PageHeader;
