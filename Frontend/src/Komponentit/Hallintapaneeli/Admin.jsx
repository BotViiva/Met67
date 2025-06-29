import { useState, useEffect } from "react";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Admin = () => {
  const [hallitus, setHallitus] = useState([
    { nimi: "", titteli: "", puhelinnumero: "", sähköposti: "" }
  ]);
  const [message, setMessage] = useState("");

  // Hae nykyinen hallitus tietokannasta kun sivu latautuu
  useEffect(() => {
    const fetchHallitus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hallitus");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setHallitus(data);
          }
        }
      } catch {
        // Ei näytetä virhettä oletuksena
      }
    };
    fetchHallitus();
  }, []);

  // Lisää uusi tyhjä jäsen
  const addMember = () => {
    setHallitus([...hallitus, { nimi: "", titteli: "", puhelinnumero: "", sähköposti: "" }]);
  };

  // Päivitä jäsenen tiedot
  const handleChange = (idx, field, value) => {
    const updated = hallitus.map((j, i) => i === idx ? { ...j, [field]: value } : j);
    setHallitus(updated);
  };

  // Lähetä uusi hallitus backendille
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/hallitus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ hallitus })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Hallitus päivitetty!");
      } else {
        setMessage(data.error || "Virhe tallennuksessa.");
      }
    } catch {
      setMessage("Yhteysvirhe palvelimeen.");
    }
  };

  // Tyhjennä hallitus backendistä
  const handleClear = async () => {
    setMessage("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/hallitus", {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        setMessage("Hallitus tyhjennetty!");
        setHallitus([{ nimi: "", titteli: "", puhelinnumero: "", sähköposti: "" }]);
      } else {
        setMessage("Virhe tyhjennyksessä.");
      }
    } catch {
      setMessage("Yhteysvirhe palvelimeen.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Hallintapaneeli</h1>
      <form onSubmit={handleSubmit}>
        <h2>Lisää uusi hallitus</h2>
        {hallitus.map((jäsen, idx) => (
          <div key={idx} className="hallitus-member-form">
            <input
              type="text"
              placeholder="Nimi"
              value={jäsen.nimi}
              onChange={e => handleChange(idx, "nimi", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Titteli"
              value={jäsen.titteli}
              onChange={e => handleChange(idx, "titteli", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Puhelinnumero"
              value={jäsen.puhelinnumero}
              onChange={e => handleChange(idx, "puhelinnumero", e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Sähköposti"
              value={jäsen.sähköposti}
              onChange={e => handleChange(idx, "sähköposti", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addMember}>Lisää jäsen</button>
        <button type="submit">Tallenna uusi hallitus</button>
      </form>
      <button onClick={handleClear} style={{ marginTop: "1em" }}>Tyhjennä hallitus</button>
      {message && <div className="info">{message}</div>}
      <button onClick={handleLogout} style={{ marginTop: "2em" }}>Kirjaudu ulos</button>
    </div>
  );
};

export default Admin;