import React from "react";
import group31 from "../assets/Group31.svg";
import home from "../assets/home.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group33} alt="vector"></img>

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
          <p style={{ fontSize: "17px" }}>Error 404</p>
          <p style={{ fontSize: "17px" }}>Sorry, this page doesn't exist</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
