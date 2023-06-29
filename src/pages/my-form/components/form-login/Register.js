import React from "react";

import A from "../../../../components/nano/A";
import Icono from "../../../../components/nano/Icono";

import Buttons from "./components/Buttons";
import RedesLogin from "./components/RedesLogin";

import SelectCountry from "./components/SelectCountry";
import SelectSex from "./components/SelectSex";

import focus from "./functions/focus";
import nextInput from "./functions/nextInput";
import check from "./functions/check";

const Register = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="backRight formGroupSesion col-xs-5 "
      id="traseraDerecha"
      onClick={() => {
        focus();
      }}
    >
      {/* Botone de iniciar secion y registrar */}
      <Buttons />

      <form
        className="row"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <br />
        {/* Input del Primer nombre */}
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerUserName" className="icoBackground col-xs-1">
            <Icono css="icon-person" />
          </label>
          <input
            type="text"
            placeholder="Primer Nombre"
            maxLength="15"
            id="registerUserName"
            name="registerUserName"
            className="col-xs-11"
            onClick={() => {
              focus();
            }}
            onKeyDown={(e) => {
              nextInput(e, "registerUserName", "registerUserSurName");
            }}
          />
        </div>
        <br />
        {/* Input del Primer apellido */}

        <div className="row col-xs-12 containerInput">
          <label
            htmlFor="registerUserSurName"
            className="icoBackground col-xs-1"
          >
            <Icono css="icon-person" />
          </label>
          <input
            type="text"
            placeholder="Primer Apellido"
            maxLength="15"
            id="registerUserSurName"
            name="registerUserSurName"
            className="col-xs-11"
            onClick={() => {
              focus();
            }}
            onKeyDown={(e) => {
              nextInput(e, "registerUserSurName", "registerCorreo");
            }}
          />
        </div>
        <br />
        <SelectSex />

        <br />
        {/* Input de fecha de nacimiento */}
        <div className="row col-xs-12 containerInput">
          <label htmlFor="userData" className="icoBackground col-xs-1">
            <Icono css="icon-calendar" />
          </label>
          <input
            type="date"
            placeholder="data"
            maxLength="15"
            id="userData"
            name="userData"
            className="col-xs-11"
            onClick={() => {
              focus();
            }}
          />
        </div>
        <br />

        {/* Input de country */}
        <SelectCountry />
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerCorreo" className="icoBackground col-xs-1">
            <Icono css="icon-mail" />
          </label>
          <input
            type="email"
            placeholder="Correo"
            name="registerCorreo"
            id="registerCorreo"
            className="col-xs-11"
            onKeyDown={(e) => {
              nextInput(e, "registerCorreo", "registerPassword");
            }}
          />
        </div>
        <br />
        {/* Input de password */}
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerPassword" className="icoBackground col-xs-1">
            <Icono css="icon-https" />
          </label>
          <input
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Contraseña"
            className="col-xs-11"
            onKeyDown={(e) => {
              nextInput(e, "registerPassword", "registerPasswordConfirm");
            }}
          />
        </div>
        <br />
        {/* Input de password 2 */}
        <div className="row col-xs-12 containerInput">
          <label
            htmlFor="registerPasswordConfirm"
            className="icoBackground col-xs-1"
          >
            <Icono css="icon-lock-plus" />
          </label>
          <input
            type="password"
            name="registerPasswordConfirm"
            id="registerPasswordConfirm"
            placeholder="Confirmar contraseña"
            className="col-xs-11"
          />
        </div>

        <RedesLogin />

        <div className="containerRegister">
          <button
            className="registerButtom submit"
            type="submit"
            value="Enviar"
            name="registerButtom"
            id="registerButtom"
            onClick={() => {
              check("register");
            }}
          >
            Crear cuenta
          </button>
        </div>
      </form>
      <div className="legal">
        <p>
          Al registrarte, estas aceptando los{" "}
          <A href={"/terminos-y-condiciones"}>Términos y condiciones</A>, y la{" "}
          <A href="/politica-de-privacidad-y-protección-de-datos">
            Política de privacidad y protección de datos
          </A>{" "}
          de Genarogg.
        </p>
      </div>
    </div>
  );
};

export default Register;
