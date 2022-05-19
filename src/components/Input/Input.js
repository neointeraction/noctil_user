import React from "react";
import "./input.css";

const Input = ({
  label,
  placeholder,
  onChange,
  value,
  type,
  name,
  defaultValue,
  multiline,
  isRequired,
  isError,
  errorMessage,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor="input" className="input-label">
          {label} {isRequired && "*"}
        </label>
      )}
      {multiline ? (
        <>
          <textarea
            className={`input-custom ${isError ? "error" : ""}`}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            value={value}
            name={name}
            rows="3"
            required={isRequired}
          ></textarea>
          {isError && <p className="error-text">{errorMessage}</p>}
        </>
      ) : (
        <>
          <input
            type={type}
            id="input"
            placeholder={placeholder}
            onChange={onChange}
            className={`input-custom ${isError ? "error" : ""}`}
            value={value}
            name={name}
            defaultValue={defaultValue}
            required={isRequired}
          />
          {isError && <p className="error-text">{errorMessage}</p>}
        </>
      )}
    </div>
  );
};

export default Input;
