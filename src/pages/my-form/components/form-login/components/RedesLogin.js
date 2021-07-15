import React from "react";
import A from "../../../../../components/nano/A";
import Icono from "../../../../../components/nano/Icono";

const RedesLogin = () => {
  return (
    <div className="redesSocialesAnimadas">
      <ul>
        <li>
          <button type="button" onClick={() => {}}>
            <A to="#">
              <Icono css="icon-google googleHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => {}}>
            <A to="#">
              <Icono css="icon-facebook facebookHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => {}}>
            <A to="#">
              <Icono css="icon-twitter twitterHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => {}}>
            <A to="#">
              <Icono css="icon-github-circle githubHover" />
              <span></span>
            </A>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RedesLogin;
