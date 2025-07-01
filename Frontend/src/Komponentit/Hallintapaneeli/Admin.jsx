import Hallituslomake from "./Hallituslomake";
import Kokouslomake from "./Kokouslomake";
import Tapahtumalomake from "./Tapahtumalomake";
import Kokouslista from "./Kokouslista";
import Tapahtumalista from "./Tapahtumalista";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const Admin = () => (
  <div className="admin-container">
    <h1>Hallintapaneeli</h1>
    <Hallituslomake />
    <Kokouslomake />
    <Kokouslista />
    <Tapahtumalomake />
    <Tapahtumalista />
    <button onClick={handleLogout} style={{ marginTop: "2em" }}>Kirjaudu ulos</button>
  </div>
);

export default Admin;