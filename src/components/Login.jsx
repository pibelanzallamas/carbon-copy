import React from "react";
import carbonLogo from "../assets/carbonLogo.svg";
import vector from "../assets/Vector.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";

function Login() {
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

        <div className="solapa top">
          <img src={group3} alt="group3"></img>
          <p>Login</p>
        </div>

        <div className="contenido">
          <div className="preview">
            <div className="texto">
              <p>let user = </p>
              <p>email: kath@p5.com</p>
              <p>password: *********</p>
            </div>
          </div>

          <div className="input-box top">
            <img src={group5} alt="group5"></img>
            <input placeholder="Email" type="email"></input>
          </div>

          <div className="input-box">
            <img src={group8} alt="group5"></img>
            <input placeholder="Password" type="password"></input>
          </div>

          <p className="forgotPassword top">
            <a href="#">forgot your password()</a>
          </p>
        </div>
        <div className="button-container">
          <button className="submitButton top">LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
