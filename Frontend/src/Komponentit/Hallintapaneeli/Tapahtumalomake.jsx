import React, { useState } from "react";

const Tapahtumalomake = () => {
  const [tapahtuma, setTapahtuma] = useState({
    otsikko: "",
    paikka: "",
    aika: "",
    kuvaus: ""
  });
  const [pdf, setPdf] = useState(null);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setTapahtuma({ ...tapahtuma, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("otsikko", tapahtuma.otsikko);
      formData.append("paikka", tapahtuma.paikka);
      formData.append("aika", tapahtuma.aika);
      formData.append("kuvaus", tapahtuma.kuvaus);
      if (pdf) formData.append("pdf", pdf);

      const response = await fetch("http://localhost:5000/api/tapahtumat", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        setMsg("Tapahtuma lisätty!");
        setTapahtuma({ otsikko: "", paikka: "", aika: "", kuvaus: "" });
        setPdf(null);
      } else {
        setMsg("Virhe tallennuksessa.");
      }
    } catch {
      setMsg("Yhteysvirhe palvelimeen.");
    }
  };

  return (
    <form className="Tapahtumalomake" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Lisää uusi tapahtuma</h2>
      <label>
        Otsikko:
        <input
          type="text"
          name="otsikko"
          value={tapahtuma.otsikko}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Paikka:
        <input
          type="text"
          name="paikka"
          value={tapahtuma.paikka}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Aika:
        <input
          type="datetime-local"
          name="aika"
          value={tapahtuma.aika}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Kuvaus:
        <textarea
          name="kuvaus"
          value={tapahtuma.kuvaus}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        PDF-esite (valinnainen):
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </label>
      <button type="submit">Lisää tapahtuma</button>
      {msg && <div className="info">{msg}</div>}
    </form>
  );
};

export default Tapahtumalomake;