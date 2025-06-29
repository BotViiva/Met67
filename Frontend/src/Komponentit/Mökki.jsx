import { useEffect, useState } from "react";
import '../Main.css';

export default function Mökki() {
  const [huvilanIsanta, setHuvilanIsanta] = useState(null);

  useEffect(() => {
    const haeIsanta = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hallitus");
        if (response.ok) {
          const data = await response.json();
          const isanta = data.find(j => j.titteli === "Huvilan isäntä");
          setHuvilanIsanta(isanta);
        }
      } catch (err) {
        setHuvilanIsanta(null);
      }
    };
    haeIsanta();
  }, []);

  return (
    <div className="Mökki">
      <div className="Mökkidiv">
        <p>Osaston huvila sijaitsee Honkaluodossa osoitteessa Jopintie 106</p>
        <p>Varaukset soittamalla/txt</p>
        <p>Yhteystiedot</p>
        {huvilanIsanta
          ? <p>{huvilanIsanta.nimi} {huvilanIsanta.puhelinnumero}</p>
          : <p>Ei tietoa huvilan isännästä</p>
        }
        <p>Avainmaksu osaston jäsenille</p>
        <p>su - to 30€, to - su 30€</p>
        <p>Syyskuun ensimmäinen viikko su - su 30€</p>
        <p>Osaston tilinumero: FI51 1065 3007 1012 35</p>
        <p>Avainten palautus 15:00 ja nouto klo 18:00</p>
      </div>
    </div>
  );
}