import React, { useEffect, useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import carbonLogo from "../assets/carbonLogo.svg";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";

function Home() {
  const user = useSelector((state) => state.user);
  const theme = useInput("vibrant_ink");
  const mode = useInput("apex");
  const color = useInput("#409333");
  const [code, setCode] = useState(`public class HelloWorld {
    public static void main(String[] args) {
        System.debug('Hello, world!');
    }
}`);

  function handleLike() {
    let sid;
    let uid = user.id;
    axios
      .post("http://localhost:3000/api/styles/register", {
        theme: theme.value,
        mode: mode.value,
        color: color.value,
      })
      .then((ok) => {
        sid = ok.data.id;
        console.log(sid, uid);
        axios
          .post("http://localhost:3000/api/favorites/register", {
            uid,
            sid,
          })
          .then((ok) => {
            console.log(ok);
            alert("fav ok");
          })
          .catch((err) => {
            alert("error");
          });
      })
      .catch((err) => {
        alert("error");
      });
  }

  function handleDownload() {
    let imagen = document.querySelector(".contenido-home");
    let canvas = document.createElement("canvas");
    canvas.width = imagen.offsetWidth;
    canvas.height = imagen.offsetHeight;

    let ctx = canvas.getContext("2d");

    ctx.drawWindow(
      window,
      imagen.offsetLeft,
      imagen.offsetTop,
      imagen.offsetWidth,
      imagen.offsetHeight,
      "rgb(255,255,255)"
    );

    let dataUrl = canvas.toDataURL();

    let img = new Image();
    img.src = dataUrl;

    let link = documents.createElement("a");
    link.href = img.src;
    link.download = "mi_imagen.png";
    link.click();
  }

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <div className="download" onClick={handleDownload}>
            <img src={group31} alt="vector"></img>
          </div>
          <div className="like-button" onClick={handleLike}>
            <img src={group32} alt="vector"></img>
          </div>
          <img src={group33} alt="vector"></img>
          {user.id ? (
            <Link to={`/user/${user.id}`}>
              <img src={group34} alt="vector"></img>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="linea"></div>
        <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>
        <p className="subtitulo top"> Give style to your code</p>
        <select {...theme} className="selects top">
          <option>Theme</option>
          <option value="dawn">Dawn</option>
          <option value="monokai">Monokai</option>
          <option value="github">Github</option>
          <option value="solarized_light">Solarized Light</option>
          <option value="tomorrow_night">Tomorrow Night</option>
          <option value="twilight">Twilight</option>
          <option value="xcode">Xcode</option>
          <option value="chaos">Chaos</option>
          <option value="dracula">Dracula</option>
          <option value="merbivore">Mervibore</option>
        </select>
        <select {...mode} className="selects">
          <option selected>Lenguage</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">Javascript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="json">Json</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="c_cpp">C++</option>
          <option value="sql">SQL</option>
        </select>
        <select {...color} className="selects">
          <option>Color</option>
          <option value="#40E0D0">Turquoise</option>
          <option value="#FF7F50">Coral</option>
          <option value="#E6E6FA">Lavender</option>
          <option value="#008080">Teal</option>
          <option value="#FF00FF">Magenta</option>
          <option value="#7FFF00">Chartreuse</option>
          <option value="#4B0082">Indigo</option>
          <option value="#00CED1">Turquoise Blue:</option>
          <option value="#FF00FF">Fuchsia</option>
          <option value="#CCCCFF">Periwinkle</option>
        </select>
        <div
          className="contenido-home top"
          style={{ backgroundColor: color.value }}
        >
          <AceEditor
            className="ace"
            mode={mode.value}
            theme={theme.value}
            value={code}
            onChange={(newCode) => {
              setCode(newCode);
            }}
            height="30vh"
            width="100%"
            showGutter={false} //n d linea
            highlightActiveLine={false}
            enableBasicAutocompletion={false}
            enableLiveAutocompletion={false} //sugest
            style={{ fontSize: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
//
