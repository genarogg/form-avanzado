import React from "react";

import Login from "./caras/Login";
/* import Register from "./caras/Register"; */
import ResetPassword from "./caras/ResetPassword";

import "./css-form/index.css";

const MyForm = () => {
  return (
    <>
      <div
        style={{
          alignItems: "baseline",
          justifyContent: "center",
          display: "flex",
        }}
        className="containerForm new-css"
        id="containerRegisterLogin"
      >
        <ResetPassword />
        <Login />
       {/*  <Register /> */}
      </div>
    </>
  );
};

export default MyForm;
