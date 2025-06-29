import logo from '../Kuvat/Logo.png';

const Header = () => {
  return (
    <div className="Header">
      <header className="Otsikko">
        <a className="Logo" href="https://www.teollisuusliitto.fi/">
          <img
            className="Logo-img"
            src={logo}
            width="170"
            height="50"
            alt="Teollisuusliiton logo"
          />
        </a>
            <a className='Pääotsikko' href='http://localhost:5173/'>
          <h1> Metalli 67 </h1>
            </a>
      </header>
    </div>
  );
}

export default Header;