import React from "react";

import "../../css/miselanea/changeColor.css";

import Icono from "../nano/Icono";

const ChangeColor = ({ position }) => {
  const change = () => {};
  return (
    <>
    <div
      className="changeColor center-xy active"
      id="changeColor"
      style={position}
      onClick={() => {
        change();
      }}
    >
      <Icono css="icon-color-lens center-xy" />
      <nav>
        <ul>
          <li>
            <button>
              <span className="color morado"></span>Morado
            </button>
          </li>
          <li>
            <button>
              <span className="color negro"></span>Negro
            </button>
          </li>
          <li>
            <button>
              <span className="color blanco"></span>Blanco
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default ChangeColor;
