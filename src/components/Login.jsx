import React from "react";
import vector from "../assets/Vector.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { alerts } from "../utils/alerts";

function Login() {
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.value, password.value);
    alerts("Bienvenido!", `Hola usuario ingreso con exito.`, "success");
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
          <p>Login</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="contenido">
            <div className="preview">
              <div className="texto">
                <p>let user = </p>
                <p>email: {email.value}</p>
                <p>password: {"*".repeat(password.value.length)}</p>
              </div>
            </div>

            <div className="input-box top">
              <img src={group5} alt="group5"></img>
              <input
                placeholder="pepito@email.com"
                {...email}
                required
                type="email"
              ></input>
            </div>

            <div className="input-box">
              <img src={group8} alt="group5"></img>
              <input
                placeholder="******"
                {...password}
                required
                type="password"
              ></input>
            </div>

            <p className="forgotPassword top">
              <Link to={"/forgot"}>Forgot your password</Link>
            </p>
          </div>
          <div className="button-container">
            <button className="submitButton top">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
