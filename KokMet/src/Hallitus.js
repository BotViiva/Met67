import Esite from "./Tiedostot/Kalajoki2025.pdf";
import HallitusLista from "./HallitusLista";

function Hallitus ()  {
    return (
      <div className="Hallitus">
        <div className="Jäsenkirje">
          <h2>Tulevat tapahtumat</h2>
          
          <h3>Kylpyläreissu Sanifaniin 8.2.2025</h3>
          <p>
          Kokkolan metallityöväen ao.67:n perinteinen koko perheen
          kylpylämatka tehdään Kalajoen Sanifaniin.
          </p>
          <a href={Esite} target="_blank" rel="noreferrer">
            Lataa esite
          </a>
          <h3>Pilkkikilpailut osaston mökillä 8.3.2024</h3>
          <p>
            Ilmoittautuminen mökillä (Jopintie 106) klo 11:00-12:00, ja kalastus
            alkaa klo 12:00. Tarjolla makkaraa ja mahtavia palkintoja!
          </p>
          <h3>Teatteritapahtuma Kokkolassa 4.4.2025</h3>
          <p>
            Lisätietoja lähempänä.
          </p>
          <h3>Vaellusretki Iso-Syötteelle 19.-21.9.2025</h3>
          <p>
            Osasto järjestää ruskaretken Iso-Syötteelle. Matkaan lähdetään perjantaina 19.9,
            ja matkalta palataan sunnuntaina 21.9. Majoitus on Kide-hotellissa tunturin juuressa.
            Omavastuu jäseneltä 90€, ja avecilta 140€.
          </p>
          <h2 className="Omavastuu">
            {" "}
            Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon
            FI51 1065 3007 1012 35
          </h2>
          <h2>Hallitus ja toimihenkilöt vuodelle 2025</h2>
          <div className="Henkilöt">
            <HallitusLista />
          </div>
        </div>
      </div>
    );
  }


export default Hallitus;
