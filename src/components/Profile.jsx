import React, { useEffect, useState } from "react";
import axios from "axios";
import group33 from "../assets/Group33.svg";
import home from "../assets/home-icon.svg";
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
  const [password, setPass] = useState(""); //que hacemoscnpass
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
          alerts(`Success!`, `User ${newU.name} updated!`, "success");
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
          alerts(`Success!`, `User ${newU.name} updated!`, "success");
          const newS = { email: newU.email, name: newU.name, id: newU.id };
          dispatch(setUser(newS));
        })
        .catch((er) => {
          alerts(`Rats!`, `The user couldn't be updated.`, "warning");
        });
    }
  }

  //del fav
  function handleDislike(fid) {
    let sid,
      uid = user.id;

    axios
      .get("http://localhost:3000/api/styles/", {
        params: { theme, mode, color },
      })
      .then((ok) => {
        sid = ok.data.id;
        axios
          .delete("http://localhost:3000/api/favorites/", {
            params: { sid, uid },
          })
          .then((ok) => {
            alerts("Ok!", "Favorite deleted!", "success");
            setLike(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  //obtener todos los favs
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const uid = id;
    axios
      .get(`http://localhost:3000/api/favorites/${uid}`)
      .then((fav) => setFavs(fav.data))
      .catch((err) => console.log(err));
  }, []);

  //select fav a global
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

  return (
    <div className="all">
      <div className="box">
        <div className="navbar">
          <img src={group33} alt="vector"></img>
          <Link to={"/home"}>
            <div className="home-icon-div">
              <img src={home} alt="vector"></img>
            </div>
          </Link>
        </div>
        <div className="linea"></div>
        <Link to={"/home"}>
          <img className="titulo top" src={carbonLogo} alt="carbonLogo"></img>
        </Link>
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
            ></input>
            <input
              style={{ color: "black" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              maxLength={60}
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
                <button onClick={() => handleDislike(fav.style.id)}>
                  dislike
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
