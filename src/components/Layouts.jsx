import React from "react";
import ChangeColor from "./miselanea/ChangeColor";
import MyForm from "./form/MyForm.js";
import MyForm2 from "./form2/MyForm2.jsx";
const Layouts = () => {
  return (
    <>
      <div className="container-my-form">
        <ChangeColor position={{ bottom: "10px", right: "10px" }} />
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>
        <MyForm2 />
        <MyForm />
       
      </div>
    </>
  );
};

export default Layouts;
