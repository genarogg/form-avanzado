import React from "react";

import Login from "./caras/Login";
import Register from "./caras/Register";
import ResetPassword from "./caras/ResetPassword";

import "./css/form-login/index.css";


const MyForm = () => {
  return (
    <>
      <ResetPassword />
      <Login />
      <Register />
    </>
  );
};

export default MyForm;
