import React from "react";
import styles from "./FormInput.module.css"

const FormInput = ({label, ...rest}) => {
  return (
    <div class="mb-3">
      <label htmlFor="exampleInputPassword1" class={`form-label ${styles.label}`}>
        {label}
      </label>
      <input {...rest} class="form-control"/>
    </div>
  );
};

export default FormInput;
