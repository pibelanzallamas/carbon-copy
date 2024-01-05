import React from "react";
import vector from "../assets/Vector.svg";
import carbonLogo from "../assets/carbonLogo.svg";

function Home() {
  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <div className="navbar-button">
            <img src={vector} alt="vector"></img>
          </div>
        </div>

        <div className="linea"></div>

        <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

        <p className="subtitulo top"> Give style to your code</p>

        <div className="input-box real top">Style</div>
        <div className="input-box real">Format</div>
        <div className="input-box real">
          <div className="colores"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
