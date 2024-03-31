import './Main.css';
import { Component } from "react";

class Mökki extends Component {
  render() {
    return <div className="Mökki">
      <div className="Mökkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 108</p>
        <p>Varaukset soittamalla/txt</p>
        <p>Yht. Tied.</p>
        <p>0400 274862 Veikko Kiema</p>
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 1012 35</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
    </div>;
  }
}

export default Mökki;