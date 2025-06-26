import yhteystiedot from '../Hallitus.json'


const tiedot= () => {
  for (let i = 0; i < yhteystiedot.length; i++) { 
    if (yhteystiedot[i].titteli === "Huvilan isäntä") {
      return <p>{yhteystiedot[i]["nimi"]} {yhteystiedot[i]["puhelinnumero"] }</p>
    }
  }
} 


export default function Mökki () {


    return <div className="Mökki">
      <div className="Mökkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 106</p>
        <p>Varaukset soittamalla/txt</p>
        <p>Yhteystiedot</p>
        {tiedot()}
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 1012 35</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
    </div>;
  }
