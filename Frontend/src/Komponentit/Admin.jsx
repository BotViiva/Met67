import '../Main.css';

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const admin = () => {
  return (
    <div className="admin-container">
      <h1>Hallintapaneeli</h1>
      <p>Tervetuloa hallintapaneeliin!</p>
      <p>Tässä voit hallita käyttäjiä, tarkastella tilastoja ja tehdä muita hallinnollisia tehtäviä.</p>
      {/* Lisää hallintapaneelin toiminnallisuuksia tähän */}
      <button onClick={handleLogout}>Kirjaudu ulos</button>
    </div>
  );
}
export default admin;