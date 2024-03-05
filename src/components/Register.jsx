import React, { useState } from "react";
import axios from "axios";
import group33 from "../assets/Group33.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
import { Link, useNavigate } from "react-router-dom";
import { alerts } from "../utils/alerts";

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
        alerts("Success!", `User created correctly!`, "success");
        navigate("/login");
      })
      .catch((err) => {
        alerts("Oh oh!", `User couldn't register propertyly.`, "warning");
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
                  <span> '{name.substring(0, 25)}'</span>,
                </p>
                <p>
                  email: <span>'{email.substring(0, 25)}'</span>,
                </p>
                <p>
                  password:{" "}
                  <span>'{"*".repeat(password.substring(0, 10).length)}'</span>
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
                maxLength={40}
                required
              ></input>
            </div>

            <div className="input-box">
              <img src={group5} alt="group5"></img>
              <input
                onChange={(e) => setEmail(e.target.value)}
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

            <p className="forgotPassword">
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
