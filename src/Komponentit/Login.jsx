import "../Main.css";

const Login = () => {
        return <>
            <div className="login-container">
                <h1>Kirjaudu sisään</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Käyttäjä:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Salasana:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Kirjaudu</button>
                    <button type="button" onClick={() => alert('Salasana unohtunut? Ota yhteyttä hallitukseen.')}>Unohditko salasanan?</button>
                </form>
            </div>
        </>
    }


export default Login;