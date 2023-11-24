import React from "react";
import carbonLogo from "../assets/carbonLogo.svg";
import vector from "../assets/Vector.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";

function Login() {
  return (
    <div className="all">
      <div className="portada login">
        <div className="content">
          <div className="darkModeButton">
            <img className="darkLogo" src={vector} alt="vector"></img>
          </div>
        </div>
        <div className="separador"></div>
        <img className="title" src={carbonLogo} alt="carbonLogo"></img>
        <h3 className="texto subtitulo"> Give style to your code</h3>
        <div className="solapa">
          <img className="decoración" src={group3} alt="group3"></img>
          <p>Login</p>
        </div>
        <div className="loginDiv">
          <div className="preview">
            <div className="texto">
              <p>let user = </p>
              <p>email: kath@p5.com</p>
              <p>password: *********</p>
            </div>
          </div>

          <div className="input">
            <img className="iconoInput" src={group5} alt="group5"></img>
            <input placeholder="Email" type="email"></input>
          </div>
          <div className="input">
            <img className="iconoInput" src={group8} alt="group5"></img>
            <input placeholder="Password" type="password"></input>
          </div>

          <p className="forgotPassword">
            <a href="#">forgot your password()</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
