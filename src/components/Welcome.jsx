import React from "react";
import { Link } from "react-router-dom";
import group19 from "../assets/Group19.svg";
import group13 from "../assets/Group13.svg";
import carboncopy from "../assets/carboncopy.svg";
import logoCarbon1 from "../assets/logoCarbon1.svg";
import group9 from "../assets/Group9.svg";
import line10 from "../assets/Line10.svg";
import logoP5 from "../assets/logoP5_color_5.svg";

function Welcome() {
  return (
    <div className="all">
      <div className="portada-welcome">
        <img className="pinA" src={group19}></img>
        <img className="pinB" src={group13}></img>
        <img className="logo" src={carboncopy}></img>
      </div>

      <div className="copete">
        <div className="texto-copete">
          <p>Proyecto educativo inspirado en</p>
          <img src={logoCarbon1} alt="logo-carbon"></img>
        </div>
        <div className="boton-copete">
          <Link to="/login">
            <div className="boton">
              <img className="linea10" src={line10} alt="linea10" />
              <img className="group9" src={group9} alt="group9" />
            </div>
          </Link>
        </div>
      </div>
      <div className="divZ"></div>
      <img className="logoP5" src={logoP5} alt="logoP5"></img>
    </div>
  );
}

export default Welcome;
