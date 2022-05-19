import React from "react";

import Dialog from "@mui/material/Dialog";
import Button from "../Button";

import "./confirmation-modal.css";

const ConfirmationModal = ({
  open,
  icon,
  title,
  subtext,
  handleClose,
  handleConfirm,
}) => {
  return (
    <div className="modal-container">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog-content">
          <div className="confirm-image">
            <img src={icon} alt={icon} />
          </div>
          <h1 className="modal-main-title">{title}</h1>
          <p className="modal-sub-title">{subtext}</p>
          <div className="action-btn-flex modal-action">
            <Button
              buttonText="Cancel"
              btnType="secondary"
              onClick={handleClose}
            />
            <Button buttonText="Confirm" onClick={handleConfirm} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
