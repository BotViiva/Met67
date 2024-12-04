import "./Main.css";
import { Component } from "react";
import Esite from "./Tiedostot/Kalajoki2025.pdf";
import EsiteTre from "./Tiedostot/TAMPERE.pdf";
import Saunailta from "./Tiedostot/Saunailta.pdf";
import HallitusLista from "./HallituksenLuonti.js";

class Hallitus extends Component {
  render() {
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
          <h3>Jääkiekko/Teatterimatka Tampereelle 17.-18.2.2024</h3>
          <p>
            {" "}
            Jääkiekko/teatterimatka Tampereelle Kokkolan matkatoimiston
            järjestämänä. Omavastuu 60€/jäsen, 90€/avec. Bussikuljetus,
            Tei-tuvalla ruokailu, teatteri tai jääkiekko, ja aamiainen kuuluu
            omavastuuseen.
          </p>
          <a href={EsiteTre} target="_blank" rel="noreferrer">
            Lataa esite
          </a>
          <h3>Pilkkikilpailut osaston mökillä 9.3.2024</h3>
          <p>
            Ilmoittautuminen mökillä (Jopintie 106) klo 11:00-12:00, ja kalastus
            alkaa klo 12:00. Tarjolla makkaraa ja mahtavia palkintoja!
          </p>
          <h3>Saunailta osaston mökillä 20.9.2024 klo 18:00</h3>
          <p>Rentoa oleskelua osaston jäsenten kesken. Pohjanmaan toiminta-alueen aluepäällikkö
          Erno välimäki tulee myös kertomaan osaston toiminnasta. Tarjolla makkaraa ja virvokkeita.
          </p>
          <a href={Saunailta} target="_blank" rel="noreferrer">
            Lataa esite
          </a>
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
}

export default Hallitus;
