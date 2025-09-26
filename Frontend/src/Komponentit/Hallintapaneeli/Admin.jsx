import Hallituslomake from "./Hallituslomake";
import Kokouslomake from "./Kokouslomake";
import Tapahtumalomake from "./Tapahtumalomake";
import Kokouslista from "./Kokouslista";
import Tapahtumalista from "./Tapahtumalista";
import React, { useState, useEffect } from "react";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Admin = () => {
  const [tapahtumat, setTapahtumat] = useState([]);
  const [kokoukset, setKokoukset] = useState([]);

  const fetchTapahtumat = async () => {
    const res = await fetch("http://localhost:5000/api/tapahtumat");
    const data = await res.json();
    setTapahtumat(data);
  };

  const fetchKokoukset = async () => {
    const res = await fetch("http://localhost:5000/api/kokoukset");
    const data = await res.json();
    setKokoukset(data);
  };

  useEffect(() => {
    fetchKokoukset();
    fetchTapahtumat();
  }, []);

  return (
    <div className="admin-container">
      <h1>Hallintapaneeli</h1>
      <Kokouslista kokoukset={kokoukset} fetchKokoukset={fetchKokoukset}/>
      <Tapahtumalista tapahtumat={tapahtumat} fetchTapahtumat={fetchTapahtumat} />
      <Kokouslomake fetchKokoukset={fetchKokoukset} />
      <Tapahtumalomake fetchTapahtumat={fetchTapahtumat} />
      <Hallituslomake />
      <button onClick={handleLogout} style={{ marginTop: "2em" }}>Kirjaudu ulos</button>
    </div>
  );
};

export default Admin;