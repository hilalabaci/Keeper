import React from "react";
import Form from "../../components/form/Form";
import "../../pages/login/login.css";

const Login = () => (
  <div className="login-container">
    <div className="logoside">
      <img className="emoji" alt="emoji" src="/assets/emoji/logo.png" />
      <h1 className="title">Notes</h1>
    </div>
    <hr className="hr" />
    <div className="formside">
      <div className="form">
        <Form />
      </div>
      <div className="linkside">
        <span className="span">Don't have an account? </span>
        <a id="signUpClicked" className="aTag" href="#">
          Sign up
        </a>
      </div>
    </div>
  </div>
);
export default Login;
