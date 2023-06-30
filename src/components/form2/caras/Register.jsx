import React from "react";

import A from "../../nano/A";
import Icono from "../../nano/Icono";

import Buttons from "./components/Buttons";
import RedesLogin from "./components/RedesLogin";

import SelectCountry from "./components/selected/SelectCountry";
import SelectSex from "./components/selected/SelectSex";

import focus from "../functions/focus";
import nextInput from "../functions/nextInput";
import check from "../functions/check";

import Input from "./components/Input";

const Register = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="backRight formGroupSesion"
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
        {/* Input del Primer nombre */}
        <Input
          type="text"
          id="registerUserName"
          placeholder="Primer Nombre"
          icono="icon-person"
          next="registerUserSurName"
          maxLength="15"
        />

        {/* Input del Primer apellido */}

        <Input
          type="text"
          id="registerUserSurName"
          placeholder="Primer Apellido"
          icono="icon-person"
          next="registerCorreo"
          maxLength="15"
        />

        <SelectSex />

        {/* Input de fecha de nacimiento */}

        <Input
          type="date"
          id="userData"
          placeholder="data"
          icono="icon-calendar"
          next="registerCorreo"
          maxLength="15"
        />

        {/* Input de country */}
        <SelectCountry />
        <Input
          type="email"
          id="registerCorreo"
          placeholder="Correo electrónico"
          icono="icon-mail"
          next="registerPassword"
        />
        <Input
          type="password"
          id="registerPassword"
          placeholder="Contraseña"
          icono="icon-https"
          next="registerPasswordConfirm"
        />
        <Input
          type="password"
          id="registerPasswordConfirm"
          placeholder="Confirmar contraseña"
          icono="icon-lock-plus"
        />

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
          Al registrarte, estas aceptando los
          <A to={"/terminos-y-condiciones"}>Términos y condiciones</A>, y la
          <A to="/politica-de-privacidad-y-protección-de-datos">
            Política de privacidad y protección de datos
          </A>
          de Genarogg.
        </p>
      </div>
    </div>
  );
};

export default Register;
