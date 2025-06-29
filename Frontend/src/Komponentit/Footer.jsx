

const login = () => {
  window.location.href = "/login";
};


const Footer = () => {
        return <>
            <footer>
                <p className="Keskitetty">Kokkolan Metallityöväen Ammattiosasto ry.67</p>
                <p className="Keskitetty">Perustettu 10.6.1917</p>
                <button className="login-button" onClick={login}>Kirjaudu sisään</button>
                <p className="Allekirjoitus">© 2021 Jaakko Niininen</p>
            </footer>
        </>
    }


export default Footer;