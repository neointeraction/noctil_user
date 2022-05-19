import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./button.css";

const Button = ({
  buttonText,
  onClick,
  btnType,
  buttonIcon,
  progress,
  disabled,
}) => {
  return (
    <div className="button-container">
      {buttonIcon ? (
        <button
          className={`custom-button icon-button ${
            btnType === "secondary" ? "secondary" : null
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          <div className="btn-with-icon">
            <span className="btn-icon">{buttonIcon}</span>
            <span>{buttonText}</span>
          </div>
        </button>
      ) : (
        <button
          className={`custom-button ${
            btnType === "secondary" ? "secondary" : null
          }`}
          disabled={disabled}
          onClick={onClick}
          readonly
        >
          {progress ? (
            <div className="btn-progress">
              <CircularProgress size={20} />
            </div>
          ) : (
            buttonText
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
