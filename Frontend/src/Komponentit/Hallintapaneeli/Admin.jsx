import Hallituslomake from "./Hallituslomake";
import Kokouslomake from "./Kokouslomake";
import Tapahtumalomake from "./Tapahtumalomake";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Admin = () => (
  <div className="admin-container">
    <h1>Hallintapaneeli</h1>
    <Hallituslomake />
    <Kokouslomake />
    <Tapahtumalomake />
    <p>Muista kirjautua ulos, kun olet valmis!</p>
    <button onClick={handleLogout} style={{ marginTop: "2em" }}>Kirjaudu ulos</button>
  </div>
);

export default Admin;