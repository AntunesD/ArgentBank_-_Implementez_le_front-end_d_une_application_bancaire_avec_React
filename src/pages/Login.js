import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";

import { apiRequest } from "../utils/apiRequest";
import { checkToken } from "../utils/checkToken";

//si on utilise les cookies
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  //state modal
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: username,
      password: password,
    };

    try {
      const response = await apiRequest("post", "/login", null, userData);
      const token = response.body.token;

      //Pour un stockage Storage en local ou session
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      //Sinon on peux le faire en cookie
      if (rememberMe) {
        Cookies.set("token", token, { expires: 365 });
      }

      dispatch(updateToken(token));
      dispatch(checkToken());

      navigate("/Profile");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);

      if (error.response && error.response.status === 400) {
        setErrorMessage("Nom d'utilisateur ou Mot de passe incorrect");
      } else {
        setErrorMessage("Erreur de connexion");
      }

      setErrorModal(true);

      setTimeout(() => {
        setErrorModal(false);
      }, 5000);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          <button type="submit" className="sign-in-button">
            Connexion
          </button>
        </form>
      </section>
      {errorModal && (
        <div className="error-modal">
          <p>{errorMessage}</p>
        </div>
      )}
    </main>
  );
}

export default Login;
