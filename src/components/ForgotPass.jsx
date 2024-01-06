import React from "react";
import vector from "../assets/Vector.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { alerts } from "../utils/alerts";

function ForgotPass() {
  const navigate = useNavigate();
  const email = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.value);
    alerts("Bienvenido!", "Email enviado", "success");
    navigate("/login");
  }

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
          <p>Forgot</p>
        </div>

        <form onSubmit={handleSubmit}>
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
              <input
                placeholder="Email"
                {...email}
                required
                type="email"
              ></input>
            </div>

            <p className="forgotPassword top">
              <Link to="/register">Register</Link>
            </p>
          </div>
          <div className="button-container">
            <button className="submitButton top">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
