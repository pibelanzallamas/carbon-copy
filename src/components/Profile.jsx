import React, { useEffect, useState } from "react";
import axios from "axios";
import group33 from "../assets/Group33.svg";
import home from "../assets/home.svg";
import carbonLogo from "../assets/carbonLogo.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { alerts } from "../utils/alerts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../state/userState";
import { setFav } from "../state/favState";

function Profile() {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPass] = useState("");
  const [favs, setFavs] = useState([]);
  const [modFav, setModFav] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //mod user
  function handleChange(e) {
    e.preventDefault();

    if (password) {
      axios
        .put(`http://localhost:3000/api/users/pass/${id}`, {
          name,
          email,
          password,
        })
        .then((ok) => {
          const newU = ok.data[1][0];
          const newS = { email: newU.email, name: newU.name, id: newU.id };
          dispatch(setUser(newS));
          alerts(`Success!`, `The user has been updated!`, "success");
          setPass("");
        })
        .catch((er) => {
          alerts(`Rats!`, `The user couldn't be updated.`, "warning");
        });
    } else {
      axios
        .put(`http://localhost:3000/api/users/${id}`, { name, email })
        .then((ok) => {
          const newU = ok.data[1][0];
          alerts(`Success!`, `The user has been updated!`, "success");
          const newS = { email: newU.email, name: newU.name, id: newU.id };
          dispatch(setUser(newS));
        })
        .catch((er) => {
          alerts(`Rats!`, `The user couldn't be updated.`, "warning");
        });
    }
  }

  //get all favs
  useEffect(() => {
    const uid = id;
    axios
      .get(`http://localhost:3000/api/favorites/${uid}`)
      .then((fav) => setFavs(fav.data))
      .catch((err) => console.log(err));
  }, [modFav]);

  //select fav
  function handleFav(id, style, format, color) {
    const selectFav = {
      id,
      style,
      format,
      color,
    };
    dispatch(setFav(selectFav));
    navigate("/home");
  }

  //del fav
  function handleDisFav(sid) {
    let uid = user.id;

    axios
      .delete("http://localhost:3000/api/favorites/", {
        params: { uid, sid },
      })
      .then((ok) => {
        setModFav(!modFav);
        alerts("Oh no!", "You have deleted the style!", "warning");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="all">
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
        <p className="subtitulo top"> Give style to your code</p>
        <div className="datos-perfil top">
          <h3>Profile</h3>
          <form onSubmit={handleChange}>
            <input
              style={{ color: "black" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              maxLength={40}
              placeholder="Katherine"
            ></input>
            <input
              style={{ color: "black" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              maxLength={60}
              placeholder="kath@p5.com"
            ></input>
            <input
              style={{ color: "black" }}
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              maxLength={20}
              placeholder="nueva password"
            ></input>
            <br></br>
            <button>Update</button>
          </form>
        </div>
        <br />
        <div className="favoritos">
          <h3>Favorites</h3>
          {favs.map((fav, id) => (
            <div className="user-fav-card" key={id}>
              <p>
                {fav.style.style}, {fav.style.format},{fav.style.color}
                <button
                  onClick={() => {
                    handleFav(
                      fav.style.id,
                      fav.style.style,
                      fav.style.format,
                      fav.style.color
                    );
                  }}
                >
                  select
                </button>
                <button onClick={() => handleDisFav(fav.style.id)}>
                  delete
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
