import ClassNames from "classnames";
import React from "react";
function Inputs({ name, placeholder, type, onChangeHandler, errors }) {
  return (
    <input
      name={name}
      className={ClassNames("form-control", { "is-invalid": errors })}
      type={type}
      onChange={onChangeHandler}
      placeholder={placeholder}
      required
    />
  );
}

export default Inputs;
