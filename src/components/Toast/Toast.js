import React from "react";
import Alert from "@mui/material/Alert";
import "./toast.css";

import Success from "../../assets/images/icons/toast-success.svg";
import Info from "../../assets/images/icons/info.svg";
import Warning from "../../assets/images/icons/warning.svg";
import Close from "../../assets/images/icons/toast-close.svg";

const Toast = ({ type, text, onClose }) => {
  return (
    <div className="toaster-container">
      <Alert
        action={
          <button onClick={onClose}>
            <img src={Close} alt="Close" />
          </button>
        }
        className={`custom-toast ${
          type === "success"
            ? "success"
            : type === "info"
            ? "info"
            : type === "warning"
            ? "warning"
            : type === "error"
            ? "error"
            : ""
        }`}
        icon={
          <img
            src={
              type === "success"
                ? Success
                : type === "info"
                ? Info
                : type === "warning"
                ? Warning
                : type === "error"
                ? Warning
                : Info
            }
            alt="Success"
            className={`toast-icon ${
              type === "success"
                ? "success"
                : type === "info"
                ? "info"
                : type === "warning"
                ? "warning"
                : type === "error"
                ? "error"
                : ""
            }`}
          />
        }
      >
        {text}
      </Alert>
    </div>
  );
};

export default Toast;
