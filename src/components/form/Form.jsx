import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./form.css";

const Form = () => (
  <form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <Button type="submit" />
  </form>
);
export default Form;
