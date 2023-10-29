//Importation des ressource pour le routing
import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { checkToken } from "./utils/checkToken";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./main.css";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
            <Layout>
              <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Login />} path="/Login" exact />
                <Route element={<Profile />} path="/Profile" />

                <Route
              element={<Home />}
              path="/ArgentBank_-_Implementez_le_front-end_d_une_application_bancaire_avec_React/"
            />

              </Routes>
            </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
