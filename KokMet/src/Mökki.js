import './Main.css';
import MökkiKuva from './mokki.jpg'
import { Component } from "react";

class Mökki extends Component {
  render() {
    return <div className="Mökki">

      <h1>Osaston Mökki</h1>
      <img src={MökkiKuva} id="Kuva" alt="Kuva mökistä"></img>
      <div class="mokkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 108</p>
        <p>Varaukset: Veikko Kiema</p>
        <p>Yht. Tied.</p>
        <p>veikko.kiema@gmail.com</p>
        <p>0400 274862</p>
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 101235</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
    </div>;
  }
}

export default Mökki;