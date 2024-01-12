import './Main.css';
import MökkiKuva from './Kuvat/uusimokki.jpg'
import Keittiö1 from './Kuvat/uusikeittio1.jpg'
import Keittiö2 from './Kuvat/uusikeittio2.jpg'
import Piha from './Kuvat/uusipiha.jpg'
import Sänky from './Kuvat/uusisanky.jpg'
import Sauna from './Kuvat/uusisauna.jpg'
import { Component } from "react";

class Mökki extends Component {
  render() {
    return <div className="Mökki">
      <h1>Osaston Mökki</h1>
      <img src={MökkiKuva} id="Kuva" alt="Kuva mökistä"></img>
      <img src={Keittiö1} id="Kuva" alt="Kuva mökistä"></img>
      <img src={Keittiö2} id="Kuva" alt="Kuva mökistä"></img>
      <img src={Piha} id="Kuva" alt="Kuva mökistä"></img>
      <img src={Sänky} id="Kuva" alt="Kuva mökistä"></img>
      <img src={Sauna} id="Kuva" alt="Kuva mökistä"></img>
      <div class="mokkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 108</p>
        <p>Varaukset soittamalla/txt</p>
        <p>Yht. Tied.</p>
        <p>0400 274862 Veikko Kiema</p>
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 101235</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
      <footer>
        <p className="Keskitetty">Kokkolan Metallityöväen Ammattiosasto ry.67</p>
        <p className="Keskitetty">Perustettu 10.6.1917</p>
        <p className="Allekirjoitus">© 2021 Jaakko Niininen</p>
      </footer>
    </div>;
  }
}

export default Mökki;