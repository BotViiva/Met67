import { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

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
      toast.error("Vahvista reCAPTCHA!");
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
        toast.error(data.error || "Kirjautuminen epäonnistui.");
      }
    } catch (err) {
      if (err.response === 401) {
        toast.error("Virheellinen käyttäjätunnus tai salasana.");
      }
      else if (err.response === 403) {
      toast.error("Yhteysvirhe palvelimeen.");
    }
  }
};

  

  return (
    <>
      <h1>Kirjaudu sisään</h1>
    <div className="div-metal-plate" style={{ maxWidth: '500px',maxHeight:'500px', margin: ' auto', position: 'relative' }}>
      
            <div className="pin pin-tl"></div>
            <div className="pin pin-tr"></div>
            <div className="pin pin-bl"></div>
            <div className="pin pin-br"></div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="Spacer"></div>
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
        <div className="Spacer"></div>
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
        <div className="Spacer"></div>
        {error && <div className="error">{error}</div>}
        
        <div>
        <button className="login-button" type="submit">Kirjaudu sisään</button>
        <button className="login-button" type="button" onClick={() => toast('Salasana unohtunut? Ota yhteyttä IT-tukeen.')}>Unohditko salasanan?</button>
        
        </div>
        
        <ReCAPTCHA
          sitekey="6LcRonQrAAAAAE_mRu5vdf-Ot9-18Iw8fzvJUYb4"
          onChange={handleRecaptcha}
        />
      </form>
    </div>
    </div>
    </>
  );

};

export default Login;