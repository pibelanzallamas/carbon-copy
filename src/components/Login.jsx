import React, { useState } from "react";
import home from "../assets/home.svg";
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
          `Welcome ${user.data.name}!`,
          `The user has logged in successfully!`,
          "success"
        );
        navigate("/home");
      })
      .catch((er) => {
        alerts("Oh no!", "The email or the password are incorrect!", "warning");
      });
  }

  return (
    <div className="all">
      <form onSubmit={handleLogin}>
        <div className="box">
          <div className="navbar">
            <Link to={"/home"}>
              <div className="home-icon-div">
                <img src={home} alt="vector" style={{ width: "24px" }}></img>
              </div>
            </Link>
          </div>

          <div className="linea"></div>

          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

          <p className="subtitulo top font-me"> Give style to your code</p>

          <div className="solapa top font-me">
            <img src={group3} alt="group3"></img>
            <p>Login</p>
          </div>

          <div className="contenido">
            <div className="preview">
              <div className="texto">
                <p className="font-me">
                  <span className="green">let</span> user = &#123;
                </p>
                <p className="font-me">
                  email: <span>'{email.substring(0, 27)}'</span>,
                </p>
                <p className="font-me">
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
                className="font-me"
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
              <p className="forgotPassword font-me">
                <Link to="/register">Register</Link>
              </p>
              <p className="forgotPassword font-me">
                <Link to={"/forgot"}>Forgot your password</Link>
              </p>
            </div>
          </div>
          <div className="button-container">
            <button className="submitButton top">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
