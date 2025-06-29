import React, { useState } from "react";

const Kokouslomake = () => {
  const [kokous, setKokous] = useState({
    tyyppi: "",
    aika: "",
    paikka: "Osaston toimisto, Pitkänsillankatu 23"
  });
  const [kokousMsg, setKokousMsg] = useState("");

  const handleKokousChange = (e) => {
    setKokous({ ...kokous, [e.target.name]: e.target.value });
  };

  const handleKokousSubmit = async (e) => {
    e.preventDefault();
    setKokousMsg("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/kokoukset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(kokous)
      });
      if (response.ok) {
        setKokousMsg("Kokous lisätty!");
        setKokous({ tyyppi: "", aika: "", paikka: "Osaston toimisto, Pitkänsillankatu 23" });
      } else {
        setKokousMsg("Virhe tallennuksessa.");
      }
    } catch {
      setKokousMsg("Yhteysvirhe palvelimeen.");
    }
  };

  return (
    <form className="Kokouslomake" onSubmit={handleKokousSubmit}>
      <h2>Lisää tuleva kokous</h2>
      <label>
        Tyyppi:
        <select name="tyyppi" value={kokous.tyyppi} onChange={handleKokousChange} required>
          <option value="">Valitse tyyppi</option>
          <option value="Hallituksen kokous">Hallituksen kokous</option>
          <option value="Kevätkokous">Kevätkokous</option>
          <option value="Syyskokous">Syyskokous</option>
          <option value="Yleiskokous">Yleiskokous</option>
        </select>
      </label>
      <label>
        Aika:
        <input
          type="datetime-local"
          name="aika"
          value={kokous.aika}
          onChange={handleKokousChange}
          required
        />
      </label>
      <label>
        Paikka:
        <input
          type="text"
          name="paikka"
          value={kokous.paikka}
          onChange={handleKokousChange}
          required
        />
      </label>
      <button type="submit">Lisää kokous</button>
      {kokousMsg && <div className="info">{kokousMsg}</div>}
    </form>
  );
};

export default Kokouslomake;