import './Main.css';
import { Component } from "react";

class Hallitus extends Component {
    render() {
        return <div className="Hallitus">
            <div className="Jäsenkirje">
                <h2>Suunnitteilla olevat tapahtumat:</h2>

                <h2>PILKKIKISAT 18.3.2023</h2>
                <p className="Keskitetty"> Honkaluodossa osaston mökillä 18.3.2023 klo 12:00–14:00. Osoite on Jopintie 108. Ilmoittautuminen kilpailuun klo 11:00–12:00 paikan päällä. Jäsenille ja perheenjäsenille. Tervetuloa!</p>
                <h2>KYLPYLÄMATKA KEVÄÄLLÄ</h2>
                <p className="Keskitetty"> Tarkemmat tiedot lähempänä</p>
                <h2 className="Omavastuu"> Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon FI51 1065 3007 101235</h2>
                <h2>Hallitus ja toimihenkilöt vuodelle 2023</h2>
                <div className="Henkilöt">
                    <section>
                        <h2>Puheenjohtaja</h2>
                        <p>Tomi Junkkila</p>
                        <p>045 6746720</p>
                        <p>tjunkkila@gmail.com</p>
                    </section>
                    <section>
                        <h2>Varapuheenjohtaja</h2>
                        <p>Esko Viitasaari</p>
                        <p>0400 744511</p>
                        <p>viitasaariesko@gmail.com</p>
                    </section>
                    <section>
                        <h2>Sihteeri</h2>
                        <p>William Nyman</p>
                        <p>040 3512990</p>
                        <p>ville.nyman@hotmail.com</p>
                    </section>
                    <section>
                        <h2>Taloudenhoitaja</h2>
                        <p>Tuomo Hautala</p>
                        <p>040 5220471</p>
                        <p>tomme.hautala@gmail.com</p>
                    </section>
                    <section>
                        <h2>Huvilan isäntä</h2>
                        <p>Veikko Kiema</p>
                        <p>0400 274862</p>
                        <p>veikko.kiema@gmail.com</p>
                    </section>
                    <section>
                        <h2>Jäsen</h2>
                        <p>Veli-Matti Kuoppala</p>
                        <p>0400 664317</p>
                        <p>veli-matti.kuoppala@anvianet.fi</p>
                    </section>
                    <section>
                        <h2>IT-Vastaava</h2>
                        <p>Jaakko Niininen</p>
                        <p>044 9763056</p>
                        <p>jaakko.niininen@gmail.com</p>
                    </section>
                    <section>
                        <h2>Varajäsen</h2>
                        <p>Juha Witick</p>
                        <p>050 5864238</p>
                        <p>juhawitick@hotmail.com</p>
                    </section>
                    <section>
                        <h2>Varajäsen</h2>
                        <p>Greger Huldén</p>
                        <p>050 3393684</p>
                        <p>greger.hulden@anvianet.fi</p>
                    </section>
                    <section>
                        <h2>Varajäsen</h2>
                        <p>Jarno Hakkio</p>
                        <p>050 3368995</p>
                        <p>jarno.hakkio@hotmail.com</p>
                    </section>
                    <section>
                        <h2>Varajäsen</h2>
                        <p>Ville Saukko</p>
                        <p>050 3421214</p>
                        <p>saukonville@gmail.com</p>
                    </section>
                </div>
            </div>
            <p>
                <p className="Bold">Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi. Ammattiosasto on Teollisuusliitto ry :n jäsen</p>
                <p className="Bold">Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.</p>
            </p>
        </div>;
    }
}

export default Hallitus
