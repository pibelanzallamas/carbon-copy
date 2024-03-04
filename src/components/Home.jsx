import React, { useEffect, useState } from "react";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-apex";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-curly";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import carbonLogo from "../assets/carbonLogo.svg";
import group31 from "../assets/Group31.svg";
import group32 from "../assets/Group32.svg";
import group32b from "../assets/Group32D.svg";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import { setUser } from "../state/userState";
import { setFav } from "../state/favState";

function Home() {
  const user = useSelector((state) => state.user);
  const fav = useSelector((state) => state.fav);
  const [like, setLike] = useState(false);
  const [theme, setTheme] = useState("vibrant_ink");
  const [mode, setMode] = useState("apex");
  const [color, setColor] = useState("#409333");

  const [code, setCode] = useState(`public class HelloWorld {
    public static void main(String[] args) {
        System.debug('Hello, world!');
    }
}`);

  useEffect(() => {
    if (fav.id) {
      setTheme(fav.style);
      setMode(fav.format);
      setColor(fav.color);
      setLike(true);
    }
  }, []);

  //set like
  useEffect(() => {
    setLike(false);
  }, [theme, mode, color]);

  function handleDislike() {
    if (!user.id) return alert("debe ingresar primero");
    let uid = user.id;
    let sid;

    axios
      .get("http://localhost:3000/api/styles/", {
        params: {
          theme: theme,
          mode: mode,
          color: color,
        },
      })
      .then((ok) => {
        sid = ok.data.id;
        axios
          .delete("http://localhost:3000/api/favorites/", {
            params: { sid, uid },
          })
          .then((ok) => {
            alert("favorito eliminado");
            setLike(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }

  function handleLike() {
    if (!user.id) return alert("debe ingresar primero");
    let sid,
      uid = user.id;

    axios //guarda el estilo
      .post("http://localhost:3000/api/styles/register", {
        theme,
        mode,
        color,
      })
      .then((ok) => {
        sid = ok.data[0].id;
        axios // guarda el estilo nuevo en mis favs
          .post("http://localhost:3000/api/favorites/register", {
            uid,
            sid,
          })
          .then((ok) => {
            if (ok.data[1]) {
              alert("guardado en favs");
              setLike(true);
            }
          })
          .catch((err) => alert("error"));
      })
      .catch((err) => alert("error"));
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
          {like ? (
            <div className="like-button" onClick={handleDislike}>
              <img src={group32b} alt="vector"></img>
            </div>
          ) : (
            <div className="like-button" onClick={handleLike}>
              <img src={group32} alt="vector"></img>
            </div>
          )}
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
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="selects top"
        >
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
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="selects"
        >
          <option defaultValue={"javascript"}>Lenguage</option>
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
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="selects"
        >
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
        <div className="contenido-home top" style={{ backgroundColor: color }}>
          <AceEditor
            className="ace"
            mode={mode}
            theme={theme}
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
