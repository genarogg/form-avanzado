import React from "react";

import Login from "./caras/Login";
import Register from "./caras/Register";
import ResetPassword from "./caras/ResetPassword";

import "./css/form-login/index.css";
import "./css/noTieneQueVerConElForm.css";

import ChangeColor from "../miselanea/ChangeColor"

const Form = () => {
  return (
    <div className="container-my-form">
    <ChangeColor position={{bottom: "10px", right:"10px"}}/>
      <div className="backgroundHome"></div>
      <div className="backgroundLigth"></div>
      <div
        style={{
          alignItems: "baseline",
          justifyContent: "center",
          display: "flex",
        }}
        className="containerForm"
        id="containerRegisterLogin"
      >
        <ResetPassword />
        <Login />
        <Register />
      </div>
     
    </div>
  );
};

export default Form;
