import React, { useEffect, useState } from "react";
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

  function handleChange(newCode) {
    setCode(newCode);
  }

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group31} alt="vector"></img>
          <img src={group32} alt="vector"></img>
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
          <div className="ace-cont">
            <AceEditor
              mode={mode.value}
              theme={theme.value}
              value={code}
              onChange={handleChange}
              height="30vh"
              showGutter={false} //n d linea
              highlightActiveLine={false}
              enableBasicAutocompletion={true}
              enableLiveAutocompletion={false} //sugest
              style={{ fontSize: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
//
