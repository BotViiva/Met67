import yhteystiedot from '../Hallitus.json'
import '../Main.css';

const huvilanIsanta = yhteystiedot.find(j => j.titteli === "Huvilan isäntä");

export default function Mökki () {


    return <div className="Mökki">
      <div className="Mökkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 106</p>
        <p>Varaukset soittamalla/txt</p>
        <p>Yhteystiedot</p>
        {<p>{huvilanIsanta.nimi} {huvilanIsanta.puhelinnumero}</p>}
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 1012 35</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
    </div>;
  }
