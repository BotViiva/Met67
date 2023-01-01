import './Main.css';
import { Component } from "react";
import Logo from "./logo.png";
import './Hallitus.js'

class Tapahtumat extends Component {
  render() {
    return <div className="Tapahtumat" >
      <div className="Header">
        <header className="Otsikko" >
          <a className="Logo" href="https://www.teollisuusliitto.fi/">
            <img className="Logo-img" src={Logo}
              width="170"
              height="50"
              alt="Teollisuusliiton logo" />
          </a>
          <div className="Pääotsikko">
            <h1> Metalli 67 </h1>
          </div>
        </header>
      </div>
      <div className="Tervetuloa">
        <h2>
          Tervetuloa Kokkolan metallityöväen ammattiosasto 67:n sivuille!
        </h2>
        <p>
          Tällä sivulla ilmoitamme osaston tapahtumat sekä kokoukset.
        </p>
        <p>
          Hallitus kokoontuu puheenjohtajan kutsusta 1- 2 kk. välein osaston toimistolla. Kevät- ja syyskokous ilmoitetaan
          erikseen täällä sekä Teollisuusliiton sivuilla.
        </p>
      </div>
      <div className="Container">
        <section className="Item">
          <h2>SEURAAVAT TAPAHTUMAT</h2>
          <p>TEATTERI/JÄÄKIEKKOMATKA VAASAAN 18.2.</p>
        </section>
        <section className="Item">
          <h2>SEURAAVA KOKOUS</h2>
          <p>Hallituksen kokous 13.2.2023 klo 19:00</p>
          <p>osaston toimistolla</p>
        </section>
      </div>
    </div>;
  }
}


export default Tapahtumat;