import { React, useState } from "react";
import group33 from "../assets/Group33.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import group3 from "../assets/Group3.svg";
import group5 from "../assets/Group5.svg";
import { Link, useNavigate } from "react-router-dom";
import { alerts } from "../utils/alerts";

function ForgotPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("kath@p5.com");

  function handleSubmit(e) {
    e.preventDefault();
    alerts("Bienvenido!", "Email enviado", "success");
    navigate("/login");
  }

  return (
    <div className="all">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="navbar">
            <img src={group33} alt="vector"></img>
          </div>

          <div className="linea"></div>

          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>

          <p className="subtitulo top"> Give style to your code</p>

          <div className="solapa top">
            <img src={group3} alt="group3"></img>
            <p>Forgot</p>
          </div>

          <div className="contenido">
            <div className="preview">
              <div className="texto">
                <p>
                  <span className="green">let</span> user = &#123;
                </p>
                <p>
                  email: <span>'{email}'</span>&#125;
                </p>
              </div>
            </div>

            <div className="input-box top">
              <img src={group5} alt="group5"></img>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder={email}
                type="email"
                maxLength={32}
                required
              ></input>
            </div>

            <p className="forgotPassword top">
              <Link to="/register">Register</Link>
            </p>
          </div>
          <div className="button-container">
            <button className="submitButton top">SEND</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPass;
