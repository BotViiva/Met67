import './Main.css';
import { Component } from "react";

class Hallitus extends Component {
    render() {
        return <div className="Hallitus">
            <div className="Jäsenkirje">
                <h2 className="Omavastuu"> Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon FI51 1065 3007 101235</h2>
                <h2>Tulevat tapahtumat vuodelle 2024</h2>
                <h3>Kylpyläreissu Tropiclandiaan 20.1.2024</h3>
                <p>Kokkolan metallityöväen ao.67:n perinteinen koko
                perheen kylpylämatka tehdään Tropiclandiaan
Vaasaan.</p>
                <a href="./static/media/Vaasa2024.pdf" download="Vaasa2024.pdf">Lataa esite</a>
                <h3>Jääkiekko/Teatterimatka Tampereelle 17.-18.2.2024</h3>
                <p> Jääkiekko/teatterimatka Tampereelle Kokkolan matkatoimiston järjestämänä. Omavastuu 60 €/jäsen, 90 €/avec. Bussikuljetus, Tei-tuvalla ruokailu, teatteri tai jääkiekko, ja aamiainen kuuluu omavastuuseen. Lisätietoja sekä ilmoittautumiset lähempänä.</p>
                <h3>Pilkkikilpailut osaston mökillä 9.3.2024</h3>
                <p>Ilmoittautuminen mökillä (Jopintie 108) klo 11:00-12:00, ja kalastus alkaa klo 12:00. Tarjolla makkaraa ja mahtavia palkintoja!</p>
                <h2>Hallitus ja toimihenkilöt vuodelle 2024</h2>
                <div className="Henkilöt">
                    <div className="HenkilötBox">
                        <h2>Puheenjohtaja</h2>
                        <p>Tomi Junkkila</p>
                        <p>045 6746720</p>
                        <p>tjunkkila@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varapuheenjohtaja</h2>
                        <p>Veli-Matti Kuoppala</p>
                        <p>0400 664317</p>
                        <p>veli-matti.kuoppala@anvianet.fi</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Sihteeri</h2>
                        <p>Jaakko Niininen</p>
                        <p>044 9763056</p>
                        <p>jaakko.niininen@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Taloudenhoitaja</h2>
                        <p>Tuomo Hautala</p>
                        <p>040 5220471</p>
                        <p>tomme.hautala@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Huvilan isäntä</h2>
                        <p>Veikko Kiema</p>
                        <p>0400 274862</p>
                        <p>veikko.kiema@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Jäsen</h2>
                        <p>Juha Witick</p>
                        <p>050 5864238</p>
                        <p>juhawitick@hotmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Jäsen</h2>
                        <p>Jeppe Koutonen</p>
                        <p>040 1892356</p>
                        <p>ugkoutonen@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varajäsen</h2>
                        <p>Martti Pukkinen</p>
                        <p>040 5652164</p>
                        <p>pukkinen.martti@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varajäsen</h2>
                        <p>Greger Huldén</p>
                        <p>050 3393684</p>
                        <p>greger.hulden@anvianet.fi</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varajäsen</h2>
                        <p>Jarno Hakkio</p>
                        <p>050 3368995</p>
                        <p>jarno.hakkio@hotmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varajäsen</h2>
                        <p>Ville Saukko</p>
                        <p>050 3421214</p>
                        <p>saukonville@gmail.com</p>
                    </div>
                    <div className="HenkilötBox">
                        <h2>Varajäsen</h2>
                        <p>Tero Tuoretmaa</p>
                        <p>040 0788183</p>
                        <p>pata88@gmail.com</p>
                    </div>
                </div>
            </div>
            <p>
                <p className="Toiminnankuvaus">Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi. Ammattiosasto on Teollisuusliitto ry :n jäsen</p>
                <p className="Toiminnankuvaus">Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.</p>
            </p>
        </div>;
    }
}

export default Hallitus
