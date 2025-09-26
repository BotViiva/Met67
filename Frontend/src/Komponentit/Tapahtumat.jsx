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
    <>
      <h1>Tulevat tapahtumat</h1>
      {tapahtumat.length === 0 && <p>Tapahtumat lisätään myöhemmin.</p>}
      {tapahtumat.map(t => (
        <div className="div-metal-plate" key={t.id} style={{ marginBottom: "2em", margin: "10px auto  ", maxWidth: "900px" }}>
            <div className="pin pin-tl"></div>
            <div className="pin pin-tr"></div>
            <div className="pin pin-bl"></div>
            <div className="pin pin-br"></div>
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
    </>
  );
}