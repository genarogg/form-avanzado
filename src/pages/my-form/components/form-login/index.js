import React from "react";

import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

import "./css/form-login/index.css";
import "./css/noTieneQueVerConElForm.css";

import ChangeColor from "../../../../components/miselanea/ChangeColor"

const Index = () => {
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

export default Index;
