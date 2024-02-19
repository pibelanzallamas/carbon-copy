import React, { useState } from "react";
import group33 from "../assets/Group33.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userState";
import { alerts } from "../utils/alerts";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("kath@p5.com");
  const [password, setPassword] = useState("********");
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", { email, password })
      .then((user) => {
        dispatch(setUser(user.data));
        alerts(
          "Usuario logueado",
          `El usuario ${user.data.name} ha sido logueado con exito.`,
          "success"
        );
        navigate("/home");
      })
      .catch((err) => {
        alerts(
          "Usuario no logueado",
          `No se encontro el usuario ingresado.`,
          "warning"
        );
      });
  }

  return (
    <div className="all">
      <form onSubmit={handleLogin}>
        <div className="box">
          <div className="navbar">
            <img src={group33} alt="vector"></img>
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
                <p>
                  <span className="green">let</span> user = &#123;
                </p>
                <p>
                  email: <span>'{email.substring(0, 27)}'</span>,
                </p>
                <p>
                  password: <span>'{"*".repeat(password.length)}'</span>&#125;
                </p>
              </div>
            </div>

            <div className="input-box top">
              <img src={group5} alt="group5"></img>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder={email}
                type="email"
                maxLength={60}
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p className="forgotPassword top">
                <Link to="/register">Register</Link>
              </p>
              <p className="forgotPassword top">
                <Link to={"/forgot"}>Forgot your password</Link>
              </p>
            </div>
          </div>
          <div className="button-container">
            <button className="submitButton top">LOGIN</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
