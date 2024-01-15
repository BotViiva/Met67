import './Main.css';
import { Component } from "react";
import Esite from './Tiedostot/Vaasa2024.pdf';
import EsiteTre from './Tiedostot/TAMPERE.pdf';
import HallitusLista from './HallituksenLuonti.js';


class Hallitus extends Component {
    render() {
        return <div className="Hallitus">
            <div className="Jäsenkirje">
                <h2>Tulevat tapahtumat vuodelle 2024</h2>
                <h3>Kylpyläreissu Tropiclandiaan 20.1.2024</h3>
                <p>Kokkolan metallityöväen ao.67:n perinteinen koko perheen kylpylämatka tehdään Tropiclandiaan Vaasaan.</p>
                <a href={Esite} download>Lataa esite</a>
                <h3>Jääkiekko/Teatterimatka Tampereelle 17.-18.2.2024</h3>
                <p> Jääkiekko/teatterimatka Tampereelle Kokkolan matkatoimiston järjestämänä. Omavastuu 60 €/jäsen, 90 €/avec. Bussikuljetus, Tei-tuvalla ruokailu, teatteri tai jääkiekko, ja aamiainen kuuluu omavastuuseen.</p>
                <a href={EsiteTre} download>Lataa esite</a>
                <h3>Pilkkikilpailut osaston mökillä 9.3.2024</h3>
                <p>Ilmoittautuminen mökillä (Jopintie 108) klo 11:00-12:00, ja kalastus alkaa klo 12:00. Tarjolla makkaraa ja mahtavia palkintoja!</p>
                <h2 className="Omavastuu"> Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon FI51 1065 3007 101235</h2>
                <h2>Hallitus ja toimihenkilöt vuodelle 2024</h2>
                <div className="Henkilöt">
                    <HallitusLista />
                </div>
            </div>

            <p className="Toiminnankuvaus">Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi. Ammattiosasto on Teollisuusliitto ry :n jäsen</p>
            <p className="Toiminnankuvaus">Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.</p>

        </div>;
    }
}

export default Hallitus