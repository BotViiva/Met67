import logo from '../Kuvat/Logo.png';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-top">
        <a className="Logo" href="https://www.teollisuusliitto.fi/">
          <img
            className="Logo-img"
            src={logo}
            width="170"
            height="50"
            alt="Teollisuusliiton logo"
          />
        </a>
        <div className="Main-header">
          <h1>Metalli 67</h1>
        </div>
      </div>
      <nav className="Nav">
        <a className="Nav-link" href="http://localhost:5173/">Etusivu</a>
        <a className="Nav-link" href="http://localhost:5173/tapahtumat">Tapahtumat</a>
        <a className="Nav-link" href="http://localhost:5173/mokki">Mökki</a>
        <a className="Nav-link" href="http://localhost:5173/yhteystiedot">Yhteystiedot</a>
      </nav>
    </header>
  );
}

export default Header;