import React from "react";
import "../input/input.css";
const Input = (props) => (
  <input
    className="inputStyle "
    type={props.type}
    placeholder={props.placeholder}
  />
);
export default Input;
