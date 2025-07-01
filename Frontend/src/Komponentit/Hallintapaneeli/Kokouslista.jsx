import { useEffect, useState } from "react";

const Kokouslista = () => {
  const [kokoukset, setKokoukset] = useState([]);
  const [msg, setMsg] = useState("");

  const fetchKokoukset = async () => {
    const res = await fetch("http://localhost:5000/api/kokoukset");
    const data = await res.json();
    setKokoukset(data);
  };

  useEffect(() => { fetchKokoukset(); }, []);

  const poistaKokous = async (id) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/kokoukset/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (res.ok) {
      setMsg("Kokous poistettu!");
      fetchKokoukset();
    } else {
      setMsg("Virhe poistossa.");
    }
  };

  return (
    <div>
      <h3>Tulevat kokoukset</h3>
      {kokoukset.length === 0 && <p>Ei tulevia kokouksia.</p>}
      <ul>
        {kokoukset.map(k => (
          <li key={k.id}>
            {k.tyyppi} – {new Date(k.aika).toLocaleString("fi-FI")} – {k.paikka}
            <button onClick={() => poistaKokous(k.id)}>Poista</button>
          </li>
        ))}
      </ul>
      {msg && <div className="info">{msg}</div>}
    </div>
  );
};

export default Kokouslista;