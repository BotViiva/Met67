import './Main.css';
import { Component } from "react";
import Teatteri from "./KESÄTEATTERIA KUOPIOSSA.docx"

class Hallitus extends Component {
    render() {
        return <div className="Hallitus">
            <div className="Jäsenkirje">
                <h2>JÄSENKIRJE 2022</h2>
                <p>Vuonna 2021 tapahtumia ei voitu järjestää koronarajotuksien vuoksi, mutta rokottekattavuuden lisääntyessä
                ja rajoituksien keventyessä, vuodelle 2022 on suunnitteilla useita eri tapahtumia. Näihin tapahtumiin
                osallistuvien
                oletetaan ottavan huomioon paikalliset koronarajoitukset (koronapassi) sekä noudattavan hyviä hygieniatapoja
            (maskit, käsien pesu). <p className="Bold">HUOM! Jos koronatilanne pahenee, voimme joutua perumaan
                tapahtumia.</p>

            Toivomme mahdollisimman monen jäsenen osallistuvan perheineen tuleviin tapahtumiin.
        </p>
                <h2>Suunnitteilla olevat tapahtumat:</h2>

                <h2>KESÄTEATTERI RAUHANLAHDESSA LA 13.8.</h2>
                <p className="Keskitetty"> Omavastuu: jäsen 50€ avec 80€. Sisältää matkat (Dahlin bussilla), majoituksen, päivällisen hotellin ravintolassa ja pääsyliput teatteriin (Rock’n Rollators: Tomi Wahlström – Ismo Apell.). Tarkemmat tiedot <a id="linkki" src={Teatteri} href="KESÄTEATTERIA KUOPIOSSA.docx" download>täältä!</a></p>
                <h2>PESÄPALLOPÄIVÄ LA 3.9.</h2>
                <p className="Keskitetty"> Tarkemmat tiedot lähempänä</p>
                <h2 className="Omavastuu"> Kaikki omavastuut maksetaan ennen tapahtumaa osaston tilinumeroon FI51 1065 3007 101235</h2>
                <h2>Hallitus ja toimihenkilöt vuodelle 2022</h2>
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
                        <h2>Jäsen</h2>
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
                        <p>Ossi Rentola</p>
                        <p>050 4033009</p>
                        <p>ossi.rentola@netikka.fi</p>
                    </section>
                    <section>
                        <h2>Varajäsen</h2>
                        <p>Risto Koski</p>
                        <p>040 5826024</p>
                        <p>ristok.koski@luukku.com</p>
                    </section>
                </div>
            </div>
            <p>
                <p className="Bold">Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi. Ammattiosasto on Teollisuusliitto ry :n jäsen</p>
                <p className="Bold">Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.</p>
            </p>
            <footer>
                <p className="Keskitetty">Kokkolan Metallityöväen Ammattiosasto ry.67</p>
                <p className="Keskitetty">Perustettu 10.6.1917</p>
                <p className="Allekirjoitus">© 2021 Jaakko Niininen</p>
            </footer>
        </div>;
    }
}

export default Hallitus
