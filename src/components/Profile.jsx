import React from "react";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

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

        <Link to={"/home"}>
          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>
        </Link>

        <p className="subtitulo top"> Give style to your code</p>
        <p className="subtitulo top"> Hola usuario {user.name}</p>
        <p className="subtitulo top"> de id {id}</p>
      </div>
    </div>
  );
}

export default Profile;