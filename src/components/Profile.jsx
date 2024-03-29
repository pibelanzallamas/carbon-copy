import React, { useEffect, useState } from "react";
import axios from "axios";
import group33 from "../assets/Group33.svg";
import group3 from "../assets/Group3.svg";
import group4 from "../assets/Group4.svg";
import group5 from "../assets/Group5.svg";
import group8 from "../assets/Group8.svg";
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
      <div className="box" style={{ paddingBottom: "1.4rem" }}>
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
        <div className="top font-me">
          <h4 style={{ color: "white" }}>Profile</h4>
          <form onSubmit={handleChange}>
            <div className="input-box mini-top">
              <div className="user-logo">
                <img src={group4} alt="group5"></img>
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                maxLength={40}
                required
              ></input>
            </div>
            <div className="input-box">
              <img src={group5} alt="group5"></img>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                maxLength={60}
                required
              ></input>
            </div>
            <div className="input-box">
              <img src={group8} alt="group5"></img>
              <input
                onChange={(e) => setPass(e.target.value)}
                placeholder={"********"}
                type="password"
                maxLength={20}
              ></input>
            </div>
            <div className="button-container">
              <button className="update-button">Update</button>
            </div>
          </form>
        </div>
        <div className="mini-top font-me">
          <h4 style={{ color: "white" }}>Favorites</h4>
          <div className="favs-container">
            {favs.map((fav, id) => (
              <div className="one-user-fav mini-top" key={id}>
                {fav.style.style} {fav.style.format}
                <div
                  className="color-fav"
                  style={{ backgroundColor: fav.style.color }}
                ></div>
                <div className="fav-buttons-container mini-top">
                  <button
                    onClick={() => {
                      handleFav(
                        fav.style.id,
                        fav.style.style,
                        fav.style.format,
                        fav.style.color
                      );
                    }}
                    className="update-button fav-buttons"
                  >
                    Select
                  </button>
                  <button
                    onClick={() => handleDisFav(fav.style.id)}
                    className="update-button fav-buttons"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
