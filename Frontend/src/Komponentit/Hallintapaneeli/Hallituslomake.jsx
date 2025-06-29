import React, { useState, useEffect } from "react";

const Hallituslomake = () => {
  const [hallitus, setHallitus] = useState([
    { nimi: "", titteli: "", puhelinnumero: "", sähköposti: "" }
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHallitus = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hallitus");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) setHallitus(data);
        }
      } catch {}
    };
    fetchHallitus();
  }, []);

  const addMember = () => {
    setHallitus([...hallitus, { nimi: "", titteli: "", puhelinnumero: "", sähköposti: "" }]);
  };

  const handleChange = (idx, field, value) => {
    const updated = hallitus.map((j, i) => i === idx ? { ...j, [field]: value } : j);
    setHallitus(updated);
  };

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
    <form onSubmit={handleSubmit}>
      <h2>Muokkaa hallituksen jäseniä</h2>
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
      {message && <div className="info"style={{ textAlign: "center" }}>{message}</div>}
      <div className="hallitus-actions">
      <button type="button" onClick={addMember}>Lisää jäsen</button>
      <button type="submit">Tallenna uusi hallitus</button>
      <button type="button" onClick={handleClear} >Tyhjennä hallitus</button>
      </div>
    </form>
  );
};

export default Hallituslomake;