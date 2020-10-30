import React from "react";
import "../App/App.css";
import LogInForm from "../Components/LogInForm";
import "./SignUp/SignUp.css";

function LoginValidate() {
  return (
    <div className="LogIn">
        <h1>Validate your email</h1>
        <p>Validate using the link to login from the email you receive from us.</p>
      <LogInForm />
    </div>
  );
}

export default LoginValidate;
