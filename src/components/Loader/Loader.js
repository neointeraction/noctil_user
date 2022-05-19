import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress size={36} />
    </div>
  );
};

export default Loader;
