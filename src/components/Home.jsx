import React from "react";
import { useState } from "react";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group29 from "../assets/Group29.svg";

function Home() {
  const [codigo, setCodigo] = useState("ingrese codigo aquí");

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

        <div className="input-box home-boxes top">Style</div>
        <div className="input-box home-boxes">Format</div>
        <div className="input-box home-boxes">
          <div className="color-selector"></div>
        </div>
        <div className="contenido-home">
          <div className="code-box">
            <img src={group29} alt="vector"></img>
            <div className="texto top">
              <p>
                <span className="green">let</span> members = name:
                <span className="pink">'Dylan'</span>, age:
                <span className="blue">22</span>, area:{" "}
                <span className="pink">'Content'</span>, name:
                <span className="pink">'Lucia'</span>, age:{" "}
                <span className="blue">25</span>, area:{" "}
                <span className="pink">'Intro'</span>, name:
                <span className="pink">'Mar'</span> , age:{" "}
                <span className="blue">24</span>, area:{" "}
                <span className="pink">'Bootcamp'</span>
              </p>
              <br />
              <p>
                <span className="green">const</span> plataforma = members =&#62;
                <span className="orange"> members</span>.map &#40;
                <span className="orange">member</span> =&#62; member.name&#41;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
