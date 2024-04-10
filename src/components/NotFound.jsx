import React from "react";
import home from "../assets/home.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="all">
      <div className="box font-me">
        <div className="navbar">
          <Link to={"/home"}>
            <div className="home-icon-div">
              <img src={home} alt="vector" style={{ width: "24px" }}></img>
            </div>
          </Link>
        </div>

        <div className="linea"></div>

        <Link to={"/home"}>
          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>
        </Link>

        <p className="subtitulo top"> Give style to your code</p>

        <div className="top" style={{ color: "#FFF" }}>
          <p style={{ fontSize: "17px" }}>Sorry, this page doesn't exist.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
