import { useEffect, useState } from "react";

export default function Tapahtumat() {
  const [tapahtumat, setTapahtumat] = useState([]);

  useEffect(() => {
    const fetchTapahtumat = async () => {
      const nyt = new Date();
      const vuosi = nyt.getFullYear();
      const res = await fetch(`http://localhost:5000/api/tapahtumat?vuosi=${vuosi}`);
      const data = await res.json();
      setTapahtumat(data);
    };
    fetchTapahtumat();
  }, []);

  return (
    <div className="Jäsenkirje">
      <h2>Tulevat tapahtumat</h2>
      {tapahtumat.length === 0 && <p>Tapahtumat lisätään myöhemmin.</p>}
      {tapahtumat.map(t => (
        <div key={t.id} style={{ marginBottom: "2em" }}>
          <h3>
            {t.otsikko}{" "}
            {t.aika && (
              <span>
                {new Date(t.aika).toLocaleDateString("fi-FI")}
              </span>
            )}
          </h3>
          <p>{t.paikka}</p>
          <p>{t.kuvaus}</p>
          {t.pdf && (
            <a
              href={`http://localhost:5000/uploads/${t.pdf}`}
              target="_blank"
              rel="noreferrer"
            >
              Lataa esite
            </a>
          )}
        </div>
      ))}
      <h2 className="Omavastuu">
        Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon
        FI51 1065 3007 1012 35
      </h2>
    </div>
  );
}