import React from "react";
import Buttons from "./components/Buttons";
import RedesLogin from "./components/RedesLogin";
import Icono from "../../../../components/nano/Icono";
import $, { $toggle, $classList } from "../../../../functions/$";

import focus  from "./functions/focus";
import nextInput from "./functions/nextInput";
import check from "./functions/check";

const Login = () => {

  const submit = (e) => {
    e.preventDefault();
  };
  


  /* Voltea la tarjeta para recuperar la contraseña */
  const voltearRecuperar = () => {
    const tarjetas = $("containerRegisterLogin");

    if (!tarjetas.classList.contains("activeLeft")) {
      tarjetas.classList.add("activeLeft");
      $("buttonBack").classList.add("active");
    }

    $classList("traseraIzq").add("tarjetaFocus");

    setTimeout(() => {
      $classList("traseraIzq").remove("tarjetaFocus");
    }, 1500);
  };

  /* cambia el color del check de remember */
  const remerberme = () => {
    $toggle("checkRemember", "active");
  };

  return (
    <>
      <div
        className="front formGroupSesion col-xs-5"
        id="front"
        onClick={() => {
          focus();
        }}
      >
        <Buttons />
        <form className="row" onSubmit={(e) => {submit(e)}}>
          <div className="row col-xs-12 containerInput">
            <label htmlFor="loginCorreo" className="icoBackground col-xs-1">
              <Icono css="icon-mail" />
            </label>
            <input
              name="loginCorreo"
              id="loginCorreo"
              className="col-xs-11"
              type="email"
              placeholder="Correo electrónico"
              onClick={() => {
                focus();
              }}

              onKeyDown={(e) => {
                nextInput(e, "loginCorreo", "loginPassword");
              }}
            />
          </div>
          <br />
          <div className="row col-xs-12 containerInput">
            <label htmlFor="loginPassword" className="icoBackground col-xs-1">
              <Icono css="icon-https" />
            </label>
            <input
              name="loginPassword"
              id="loginPassword"
              className="col-xs-11"
              type="password"
              placeholder="Contraseña"
              onClick={() => {
                focus();
              }}
            />
          </div>
          <br />
          <RedesLogin />
          <div
            className="row col-xs-12 checkBoxContainer"
            onClick={() => {
              remerberme();
            }}
          >
            <Icono css="icon-check_circle_outline" id="checkRemember" />
            <label htmlFor="checkRemember" id="checkRememberLabel">
              <p>Mantener sesion</p>
            </label>
          </div>
          <br />

          <br />
          <div className="buttonContainer col-xs-12">
            <button
              className="login submit"
              name="loginButton"
              id="loginButton"
              type="submit"
              value="send"
              onClick={() => {
                check("login");
              }}
            >
              Acceder
            </button>
          </div>
          <br />
          <div className="forgotPasswordContainer col-xs-12">
            <button
              type="button"
              className="registrarse link"
            
              onClick={() => {
                voltearRecuperar();
              }}
            >
              <p>¿Olvidaste tu contraseña?</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
