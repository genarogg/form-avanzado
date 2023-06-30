import React from "react";
import Buttons from "./components/Buttons";

import Icono from "../../nano/Icono";
import $, { $toggle, $classList } from "../functions/$";
import RedesLogin from "./components/RedesLogin";
import focus from "../functions/focus";
import nextInput from "../functions/nextInput";
import check from "../functions/check";

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

    $toggle("checkRemember", "icon-check-square");
    $toggle("checkRemember", "icon-plus-square");
  };

  const Input = ({ type, id, icono, placeholder, next }) => {
    return (
      <>
        <div className="containerInput">
          <label htmlFor={id}>
            <Icono css={icono} />
          </label>
          <input
            name={id}
            id={id}
            type={type}
            placeholder={placeholder}
            onClick={() => {
              focus();
            }}
            onKeyDown={(e) => {
              nextInput(e, id, next);
            }}
          />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="front formGroupSesion">
        <Buttons />
        <form>
          <Input
            type="email"
            id="loginCorreo"
            placeholder="Correo electrónico"
            icono="icon-mail"
            next="loginPassword"
          />
          <Input
            type="password"
            id="loginPassword"
            placeholder="Contraseña"
            icono="icon-https"
          />
          <RedesLogin />

          <div
            className="checkBoxContainer"
            onClick={() => {
              remerberme();
            }}
          >
            <Icono css="icon-plus-square" id="checkRemember" />
            <label htmlFor="checkRemember" id="checkRememberLabel">
              <p>Mantener sesion</p>
            </label>
          </div>

          <div className="buttonContainer">
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

          <div className="forgotPasswordContainer ">
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
