import React, { use, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Kuvat/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Tallenna token localStorageen
        localStorage.setItem("token", data.token);
        navigate("/admin"); // Ohjaa hallintasivulle
      } else {
        setError(data.error || "Kirjautuminen epäonnistui.");
      }
    } catch (err) {
      setError("Yhteysvirhe palvelimeen.");
    }
  };

  

  return (
    <>
    <div className="Header">
              <header className="Otsikko">
                <a className="Logo" href="https://www.teollisuusliitto.fi/">
                  <img
                    className="Logo-img"
                    src={Logo}
                    width="170"
                    height="50"
                    alt="Teollisuusliiton logo"
                  />
                </a>
                <div className="Pääotsikko">
                  <h1> Metalli 67 </h1>
                </div>
              </header>
            </div>
    <div className="login-container">
      <h1>Kirjaudu sisään</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Käyttäjä:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Salasana:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Kirjaudu</button>
        <button type="button" onClick={() => alert('Salasana unohtunut? Ota yhteyttä IT-tukeen.')}>Unohditko salasanan?</button>
      </form>
    </div>
    </>
  );
};

export default Login;