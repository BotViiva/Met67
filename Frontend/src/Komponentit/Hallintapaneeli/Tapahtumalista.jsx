import { useEffect, useState } from "react";

const Tapahtumalista = () => {
  const [tapahtumat, setTapahtumat] = useState([]);
  const [msg, setMsg] = useState("");

  const fetchTapahtumat = async () => {
    const res = await fetch("http://localhost:5000/api/tapahtumat");
    const data = await res.json();
    setTapahtumat(data);
  };

  useEffect(() => { fetchTapahtumat(); }, []);

  const poistaTapahtuma = async (id) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/tapahtumat/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (res.ok) {
      setMsg("Tapahtuma poistettu!");
      fetchTapahtumat();
    } else {
      setMsg("Virhe poistossa.");
    }
  };

  return (
    <div>
      <h3>Tulevat tapahtumat</h3>
      {tapahtumat.length === 0 && <p>Ei tulevia tapahtumia.</p>}
      <ul>
        {tapahtumat.map(t => (
          <li key={t.id}>
            {t.otsikko} – {new Date(t.aika).toLocaleDateString("fi-FI")} – {t.paikka}
            <button onClick={() => poistaTapahtuma(t.id)}>Poista</button>
            {t.pdf && (
              <a href={`http://localhost:5000/uploads/${t.pdf}`} target="_blank" rel="noopener noreferrer">PDF</a>
            )}
          </li>
        ))}
      </ul>
      {msg && <div className="info">{msg}</div>}
    </div>
  );
};

export default Tapahtumalista;