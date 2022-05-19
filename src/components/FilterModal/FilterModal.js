import React from "react";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";
import Grid from "@mui/material/Grid";
import Select from "../../components/Select";
import Input from "../../components/Input";

import Search from "../../assets/images/icons/search-btn-icon.svg";
import Union from "../../assets/images/icons/Union.svg";

import "./filter-modal.css";

const FilterModal = ({ open, handleClose, handleConfirm }) => {
  return (
    <div className="filter-modal-container">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <div className="dialog-content filter-dialog">
          <div className="modal-title-flex">
            <h4 className="modal-title">Advance Search and Filter</h4>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="modal-content">
            <div className="search-block">
              <div className="modal-subtitle-flex">
                <h5 className="modal-subtitle">Search Criteria</h5>
              </div>
              <div className="search-forms">
                <Grid container spacing={4} alignItems="flex-end">
                  <Grid item xs={4}>
                    <Select
                      label="Attribute"
                      value={""}
                      options={[
                        { id: "Sagafta", optionText: "Account" },
                        {
                          id: "Account",
                          optionText: "Account",
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      label="Condition"
                      value={""}
                      options={[
                        { id: "Sagafta", optionText: "Account" },
                        {
                          id: "Account",
                          optionText: "Account",
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div className="input-with-button">
                      <Input
                        placeholder="Search Accounts"
                        name="filter"
                        onChange={() => {}}
                      />
                      <button className="icon-btn">
                        <img src={Search} alt="Search" />
                      </button>
                    </div>
                  </Grid>
                </Grid>
                <h5 className="modal-sub-label">Add Additional Criteria</h5>
                <div className="additional-flex">
                  <button className="link-add">
                    AND <img src={Union} alt="Union" />
                  </button>
                  <button className="link-add">
                    OR <img src={Union} alt="Union" />
                  </button>
                </div>
              </div>
            </div>
            <div className="search-block">
              <div className="modal-subtitle-flex">
                <h5 className="modal-subtitle">Filter Criteria</h5>
              </div>
              <div className="search-forms">
                <Grid container spacing={4} alignItems="flex-end">
                  <Grid item xs={4}>
                    <Select
                      label="Attribute"
                      value={""}
                      options={[
                        { id: "Sagafta", optionText: "Account" },
                        {
                          id: "Account",
                          optionText: "Account",
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      label="Condition"
                      value={""}
                      options={[
                        { id: "Sagafta", optionText: "Account" },
                        {
                          id: "Account",
                          optionText: "Account",
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div className="input-with-button">
                      <Input
                        placeholder="Search Accounts"
                        name="filter"
                        onChange={() => {}}
                      />
                      <button className="icon-btn">
                        <img src={Search} alt="Search" />
                      </button>
                    </div>
                  </Grid>
                </Grid>
                <h5 className="modal-sub-label">Add Additional Criteria</h5>
                <div className="additional-flex">
                  <button className="link-add">
                    AND <img src={Union} alt="Union" />
                  </button>
                  <button className="link-add">
                    OR <img src={Union} alt="Union" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="action-btn-flex filter-modal-action">
            <Button
              buttonText="Cancel"
              btnType="secondary"
              onClick={handleClose}
            />
            <Button buttonText="Save" onClick={handleConfirm} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FilterModal;
