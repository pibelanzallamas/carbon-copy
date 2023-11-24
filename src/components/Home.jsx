import React from "react";
import { Link } from "react-router-dom";
import carboncopy from "../assets/carboncopy.svg";
import group19 from "../assets/Group19.svg";
import group13 from "../assets/Group13.svg";
import logoCarbon1 from "../assets/logoCarbon1.svg";

function Home() {
  return (
    <div className="all">
      <div className="portada">
        <img className="pinA" src={group19}></img>
        <img className="pinB" src={group13}></img>
        <img className="logo" src={carboncopy}></img>
      </div>

      <div className="copete">
        <div className="texto-copete">
          <p>Proyecto educativo inspirado en</p>
          <img src={logoCarbon1} alt="logo-carbon"></img>
        </div>

        <div className="boton-copete"></div>
      </div>
    </div>
  );
}

export default Home;
