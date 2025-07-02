import { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!recaptchaToken) {
      setError("Vahvista reCAPTCHA!");
      return;
    }
  

    
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, recaptchaToken }),
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
        <ReCAPTCHA
          sitekey="6LcRonQrAAAAAE_mRu5vdf-Ot9-18Iw8fzvJUYb4"
          onChange={handleRecaptcha}
        />
      </form>
    </div>
    </>
  );
};

export default Login;