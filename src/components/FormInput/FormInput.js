import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ label, ...rest }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="exampleInputPassword1"
        className={`form-label ${styles.label}`}
      >
        {label}
      </label>
      <input {...rest} className="form-control" />
    </div>
  );
};

export default FormInput;
