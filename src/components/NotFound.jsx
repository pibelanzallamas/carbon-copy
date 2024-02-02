import React from "react";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";

function NotFound() {
  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group31} alt="vector"></img>

          <img src={group32} alt="vector"></img>

          <img src={group33} alt="vector"></img>

          <img src={group34} alt="vector"></img>
        </div>

        <div className="linea"></div>

        <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

        <p className="subtitulo top"> Give style to your code</p>

        <div className="top" style={{ margin: "8rem auto" }}>
          <p style={{ fontSize: "17px" }}> Lo siento. Página no encontrada.</p>
          <p style={{ fontSize: "34px", textAlign: "center" }}>😵</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
