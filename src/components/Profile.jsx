import React, { useEffect, useState } from "react";
import axios from "axios";
import group33 from "../assets/Group33.svg";
import group34 from "../assets/Group34.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import { Link, useParams } from "react-router-dom";
import { alerts } from "../utils/alerts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../state/userState";

function Profile() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPass] = useState("*****"); //que hacemoscnpass
  const dispatch = useDispatch();

  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const uid = id;
    axios
      .get(`http://localhost:3000/api/favorites/${uid}`)
      .then((fav) => setFavs(fav.data))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/users/${id}`, { name, email, password })
      .then((ok) => {
        const newU = ok.data[1][0];
        alerts(`Exito!`, `El usuario ha sido actualizado.`, "success");
        const newS = { email: newU.email, name: newU.name, id: newU.id };
        dispatch(setUser(newS));
      })
      .catch((er) => {
        console.log(er);
        alerts(`Ratas!`, `El usuario no puedo ser modificado.`, "warning");
      });
  }

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group33} alt="vector"></img>
          <img src={group34} alt="vector"></img>
        </div>

        <div className="linea"></div>

        <Link to={"/home"}>
          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>
        </Link>

        <p className="subtitulo top"> Give style to your code</p>
        <p className="subtitulo"> Hola usuario {user.name}</p>
        <div className="datos-perfil">
          <h3>Perfil</h3>
          <form onSubmit={handleChange}>
            <input
              style={{ color: "black" }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              type="text"
              maxLength={40}
            ></input>
            <input
              style={{ color: "black" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              maxLength={60}
            ></input>
            <input
              style={{ color: "black" }}
              value={password}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
              type="password"
              maxLength={20}
            ></input>
            <br></br>
            <button>Modificar</button>
          </form>
        </div>
        <div className="favoritos">
          <h3>Favoritos</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
