import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group29 from "../assets/Group29.svg";
import useInput from "../hooks/useInput";

function Home() {
  const user = useSelector((state) => state.user);
  const style = useInput("");
  const format = useInput("");
  const color = useInput("");
  const [codigo, setCodigo] = useState("ingrese codigo aquí");

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group31} alt="vector"></img>

          <img src={group32} alt="vector"></img>

          <img src={group33} alt="vector"></img>

          {user.id ? (
            <Link to={`/user/${user.id}`}>
              <img src={group34} alt="vector"></img>
            </Link>
          ) : (
            <></>
          )}
        </div>

        <div className="linea"></div>

        <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

        <p className="subtitulo top"> Give style to your code</p>

        <select {...style} className="select top">
          <option>Style</option>
          <option value="modern">Modern Kid</option>
          <option value="old">Old Times</option>
          <option value="cosmic">Cosmic</option>
        </select>
        <select {...format} className="select">
          <option>Format</option>
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
          <option value="SQL">SQL</option>
        </select>
        <select {...color} className="select">
          <option>Color</option>
          <option value="Naranja">Naranja</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
        </select>

        <div className="contenido-home top">
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
