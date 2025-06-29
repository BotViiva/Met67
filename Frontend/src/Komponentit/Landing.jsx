import { useEffect, useState } from "react";

const Landing = () => {
  const [seuraavaKokous, setSeuraavaKokous] = useState(null);
  const [seuraavaTapahtuma, setSeuraavaTapahtuma] = useState(null);

  useEffect(() => {
    // Hae seuraava kokous
    fetch("http://localhost:5000/api/kokoukset")
      .then(res => res.json())
      .then(data => {
        // Oletetaan että data on lista, järjestetty aikajärjestykseen
        if (data.length > 0) setSeuraavaKokous(data[0]);
      });

    // Hae seuraava tapahtuma
    fetch("http://localhost:5000/api/tapahtumat")
      .then(res => res.json())
      .then(data => {
        // Oletetaan että data on lista, järjestetty aikajärjestykseen
        if (data.length > 0) setSeuraavaTapahtuma(data[0]);
      });
  }, []);

  return (
    <div className="Landing">
      <div className="Tervetuloa">
        <h2>
          Tervetuloa Kokkolan metallityöväen ammattiosasto 67:n sivuille!
        </h2>
        <div className="Container">
          <section className="Item">
            <h2>SEURAAVA TAPAHTUMA</h2>
            {seuraavaTapahtuma ? (
              <>
                <p>{seuraavaTapahtuma.otsikko}</p>
                <p>{seuraavaTapahtuma.paikka}</p>
                <p>{new Date(seuraavaTapahtuma.aika).toLocaleString("fi-FI")}</p>
              </>
            ) : (
              <p>Ei tulevia tapahtumia.</p>
            )}
          </section>
        </div>
        <div className="Container">
          <section className="Item">
            <h2>SEURAAVA KOKOUS</h2>
            {seuraavaKokous ? (
              <>
                <p>{seuraavaKokous.tyyppi}</p>
                <p>{new Date(seuraavaKokous.aika).toLocaleString("fi-FI")}</p>
                <p>{seuraavaKokous.paikka}</p>
              </>
            ) : (
              <p>Ei tulevia kokouksia.</p>
            )}
          </section>
        </div>
          <p className="Toiminnankuvaus">
            Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla
            parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia
            sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen
            aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi.
            Ammattiosasto on Teollisuusliitto ry :n jäsen
          </p>
          <p className="Toiminnankuvaus">
            Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä
            yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä
            tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.
          </p>
          <p className="Toiminnankuvaus">
            Hallitus kokoontuu puheenjohtajan kutsusta 1- 2 kk. välein osaston
            toimistolla. Kevät- ja syyskokous ilmoitetaan erikseen täällä sekä
            Teollisuusliiton sivuilla.
          </p>
        </div>
      </div>
    );
  }


export default Landing;
