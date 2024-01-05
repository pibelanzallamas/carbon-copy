import React from "react";
import vector from "../assets/Vector.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { alerts } from "../utils/alerts";

function Register() {
  const navigate = useNavigate();
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.value, email.value, password.value);
    alerts(
      "Usuario creado",
      `El usuario ${name.value} ha sido creado con exito.`,
      "success"
    );
    navigate("/home");
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
          <p>Register</p>
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
              <div className="user-logo">
                <img src={group4} alt="group5"></img>
              </div>
              <input
                placeholder="Pepito"
                {...name}
                type="text"
                required
              ></input>
            </div>

            <div className="input-box">
              <img src={group5} alt="group5"></img>
              <input
                placeholder="pepito@email.com"
                {...email}
                type="email"
                required
              ></input>
            </div>

            <div className="input-box">
              <img src={group8} alt="group5"></img>
              <input
                placeholder="******"
                {...password}
                type="password"
                required
              ></input>
            </div>

            <p className="forgotPassword top">
              <Link to="/login">Log in</Link>
            </p>
          </div>
          <div className="button-container">
            <button className="submitButton top">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
