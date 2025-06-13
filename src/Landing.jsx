import Logo from "./Kuvat/logo.png";

function Landing () {
    return (
      <div className="Landing">
        <div className="Header">
          <header className="Otsikko">
            <a className="Logo" href="https://www.teollisuusliitto.fi/">
              <img
                className="Logo-img"
                src={Logo}
                width="170"
                height="50"
                alt="Teollisuusliiton logo"
              />
            </a>
            <div className="Pääotsikko">
              <h1> Metalli 67 </h1>
            </div>
          </header>
        </div>
        <div className="Tervetuloa">
          <h2>
            Tervetuloa Kokkolan metallityöväen ammattiosasto 67:n sivuille!
          </h2>
          <div className="Container">
            <section className="Item">
              <h2>SEURAAVA TAPAHTUMA</h2>
              <p>Teatterireissu Lappajärvelle</p>
              <p>Keskiviikkona 16.7.2025 </p>
            </section>
          </div>
          <div className="Container">
            <section className="Item">
              <h2>SEURAAVA KOKOUS</h2>
              <p>Osaston toimistolla</p>
              <p>Tiistaina 12.8.2025 klo 18:00</p>
            </section>
          </div>
          <p className="Toiminnankuvaus">
            Ammattiosaston toiminnan tarkoitus on jäsenistön yhteistyön avulla
            parantaa ja puolustaa työ- ja palkkaehtoja, taloudellisia
            sosiaalisia etuja, sekä toimia palkansaajien yhteiskunnallisen
            aseman, oikeudenmukaisuuden ja tasa-arvon edistamiseksi.
            Ammattiosasto on Teollisuusliitto ry :n jäsen
          </p>
          <p className="Toiminnankuvaus">
            Näiden perustehtävien lisäksi osasto pyrkii lisäämään jäsenistönsä
            yhteenkuuluvuutta ja solidaarisuutta järjestämällä yhteisiä
            tapahtumia, joihin ovat tervetulleita myös perheenjäsenet.
          </p>
          <p className="Toiminnankuvaus">
            Hallitus kokoontuu puheenjohtajan kutsusta 1- 2 kk. välein osaston
            toimistolla. Kevät- ja syyskokous ilmoitetaan erikseen täällä sekä
            Teollisuusliiton sivuilla.
          </p>
        </div>
      </div>
    );
  }


export default Landing;
