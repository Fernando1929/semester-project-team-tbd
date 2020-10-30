import React from "react";
import "../App/App.css";
import LogInForm from "../Components/LogInForm";
import Validate from "../Components/Validate";
import "./SignUp/SignUp.css";

function LoginValidate() {
  return (
    <div className="LogIn">
      <Validate/>
      <LogInForm />
    </div>
  );
}

export default LoginValidate;
