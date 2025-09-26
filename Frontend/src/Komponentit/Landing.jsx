import { useEffect, useState } from "react";
import MetalPlatesContainer from "./MetalPlatesContainer";
import { Meta } from "react-router-dom";

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
    <div>
      <p></p>
        <MetalPlatesContainer>
          <section className="div-metal-plate">
            <div className="pin pin-tl"></div>
            <div className="pin pin-tr"></div>
            <div className="pin pin-bl"></div>
            <div className="pin pin-br"></div>
            <h2>SEURAAVA TAPAHTUMA</h2>
            {seuraavaTapahtuma ? (
              <>
                <p>{seuraavaTapahtuma.otsikko}</p>
                <p>{seuraavaTapahtuma.paikka}</p>
                <p>{new Date(seuraavaTapahtuma.aika).toLocaleDateString("fi-FI")}</p>
              </>
            ) : (
              <p>Ei tulevia tapahtumia.</p>
            )}
          </section>
          <section className="div-metal-plate">
            <div className="pin pin-tl"></div>
            <div className="pin pin-tr"></div>
            <div className="pin pin-bl"></div>
            <div className="pin pin-br"></div>
            <h2>SEURAAVA KOKOUS</h2>
            {seuraavaKokous ? (
              <>
                <p>{seuraavaKokous.tyyppi}</p>
                <p>{new Date(seuraavaKokous.aika).toLocaleString("fi-FI")}</p>
                <p>{seuraavaKokous.paikka}</p>
              </>
            ) : (
              <p>Ilmoitetaan myöhemmin.</p>
            )}
          </section>
        </MetalPlatesContainer>
        <div className="div-metal-plate">
            <div className="pin pin-tl"></div>
            <div className="pin pin-tr"></div>
            <div className="pin pin-bl"></div>
            <div className="pin pin-br"></div>
          <p>
            Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla
            parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia
            sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen
            aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi.
            Ammattiosasto on Teollisuusliitto ry :n jäsen.
          </p>
          <p>
            Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä
            yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä
            tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.
          </p>
          <p>
            Hallitus kokoontuu puheenjohtajan kutsusta 1- 2 kk. välein osaston
            toimistolla. Kevät- ja syyskokous ilmoitetaan erikseen täällä sekä
            Teollisuusliiton sivuilla.
          </p>
          </div>
      </div>
    );
  }


export default Landing;
