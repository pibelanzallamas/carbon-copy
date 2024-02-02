import React, { useState } from "react";
import group33 from "../assets/Group33.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
import { Link, useNavigate } from "react-router-dom";
import { alerts } from "../utils/alerts";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("Katherine");
  const [email, setEmail] = useState("kath@p5.com");
  const [password, setPassword] = useState("********");

  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/register", {
        name,
        email,
        password,
      })
      .then((user) => {
        alerts(
          "Usuario creado",
          `El usuario ${user.data[0].name} ha sido creado con exito.`,
          "success"
        );
        navigate("/login");
      })
      .catch((err) => {
        alerts(
          "Usuario no creado",
          `El usuario ${name} no ha sido creado con exito.`,
          "danger"
        );
      });
  }

  return (
    <div className="all">
      <form onSubmit={handleRegister}>
        <div className="box">
          <div className="navbar">
            <img src={group33} alt="vector"></img>
          </div>

          <div className="linea"></div>

          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

          <p className="subtitulo top"> Give style to your code</p>

          <div className="solapa top">
            <img src={group3} alt="group3"></img>
            <p>Sign up</p>
          </div>

          <div className="contenido">
            <div className="preview">
              <div className="texto">
                <p>
                  <span className="green">let</span> user = &#123; name:
                  <span> '{name}'</span>,
                </p>
                <p>
                  email: <span>'{email}'</span>,
                </p>
                <p>
                  password: <span>'{"*".repeat(password.length)}'</span>
                  &#125;
                </p>
              </div>
            </div>

            <div className="input-box top">
              <div className="user-logo">
                <img src={group4} alt="group5"></img>
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder={name}
                type="text"
                maxLength={24}
                required
              ></input>
            </div>

            <div className="input-box">
              <img src={group5} alt="group5"></img>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder={email}
                type="email"
                maxLength={32}
                required
              ></input>
            </div>

            <div className="input-box">
              <img src={group8} alt="group5"></img>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder={password}
                type="password"
                maxLength={20}
                required
              ></input>
            </div>

            <p className="forgotPassword top">
              <Link to="/login">Log in</Link>
            </p>
          </div>

          <div className="button-container">
            <button className="submitButton top">SIGN UP</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
