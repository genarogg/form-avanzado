import React from "react";
import ChangeColor from "./miselanea/ChangeColor";
import MyForm from "./form/MyForm.js";
const Layouts = () => {
  return (
    <div className="container-my-form">
      <ChangeColor position={{ bottom: "10px", right: "10px" }} />
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
        <MyForm />
      </div>
    </div>
  );
};

export default Layouts;
