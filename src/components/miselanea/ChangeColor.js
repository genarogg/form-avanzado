import React, { useEffect } from "react";

import { $classList, $toggle } from "../../functions/$";

import "../../css/miselanea/changeColor.css";

import Icono from "../nano/Icono";

const ChangeColor = ({ position }) => {
  const active = () => {
    $toggle("changeColor", "active");
  };

  const change = (color) => {
    const id = $classList("root");
    id.remove("morado", "white", "black");
    id.add(color);

    localStorage.setItem("theme", color);
  };

  const local = () => {
    try {
      const color = localStorage.getItem("theme") || "default";

      change(color);
    } catch (e) {}
  };

  useEffect(() => {
    local();
    return () => {};
  }, []);
  return (
    <>
      <div className="changeColor center-xy " id="changeColor" style={position}>
        <span
          className="cover"
          onClick={() => {
            active();
          }}
        ></span>
        <Icono css="icon-color-lens center-xy" />
        <nav>
          <ul>
            <li>
              <button>
                <Icono css="icon-color-lens center-xy" />
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  change("morado");
                  active()
                }}
                id="morado"
              >
                <span className="color morado "></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  change("black");
                  active()
                }}
                id="negro"
              >
                <span className="color negro"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  change("white");
                  active()
                }}
                id="blanco"
              >
                <span className="color blanco"></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ChangeColor;
