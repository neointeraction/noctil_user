import React from "react";
import "./select.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Input = ({
  label,
  options,
  onChange,
  value,
  name,
  tableSelect,
  isMulti,
  isRequired,
  isError,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor="input" className="input-label">
          {label} {isRequired && "*"}
        </label>
      )}
      {isMulti ? (
        <>
          <Select
            IconComponent={KeyboardArrowDownIcon}
            className="custom-select"
            placeholder={placeholder}
            value={value}
            multiple
            onChange={onChange}
            displayEmpty
            name={name}
            error={isError}
            required={isRequired}
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              sx: {
                boxShadow: 0,
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <em className="select-placeholder">
                    {placeholder ? placeholder : "Select"}
                  </em>
                );
              }
              return selected.join(", ");
            }}
          >
            {options.map((item) => (
              <MenuItem
                className="custom-menuItem"
                value={item.optionText}
                disableRipple
              >
                <Checkbox
                  className="custom-list-checked custom-checkbox"
                  checked={value.indexOf(item.optionText) > -1}
                  disableRipple
                />
                <ListItemText
                  disableRipple
                  className="custom-list-text"
                  primary={item.optionText}
                />
              </MenuItem>
            ))}
          </Select>
          {isError && <p className="error-text">{errorMessage}</p>}
        </>
      ) : (
        <>
          <Select
            IconComponent={KeyboardArrowDownIcon}
            className="custom-select"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={isRequired}
            error={isError}
            displayEmpty
            name={name}
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              sx: {
                boxShadow: 0,
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
            renderValue={(selected) => {
              if (selected?.length === 0) {
                return (
                  <em className="select-placeholder">
                    {placeholder ? placeholder : "Select"}
                  </em>
                );
              }
              return selected;
            }}
          >
            {!tableSelect && (
              <MenuItem className="custom-menuItem" value="">
                None
              </MenuItem>
            )}

            {options.map((item) => (
              <MenuItem
                className="custom-menuItem"
                value={item.optionText}
                disableRipple
              >
                {item.optionText}
              </MenuItem>
            ))}
          </Select>
          {isError && <p className="error-text">{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default Input;
