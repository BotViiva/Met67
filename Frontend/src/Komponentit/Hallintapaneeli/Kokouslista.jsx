import { toast } from "react-toastify";

const Kokouslista = ({ kokoukset, fetchKokoukset }) => {
  const poistaKokous = async (id) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/kokoukset/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (res.ok) {
      toast.success("Kokous poistettu!");
      fetchKokoukset();
    } else {
      toast.error("Virhe poistossa.");
    }
  };

  return (
    <div>
      <h3>Tulevat kokoukset</h3>
      {kokoukset.length === 0 && <p>Ei tulevia kokouksia.</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {kokoukset.map(k => (
          <li key={k.id}>
            {k.tyyppi} – {new Date(k.aika).toLocaleString("fi-FI")} – {k.paikka}
            <button style={{borderRadius:"8px"}} onClick={() => poistaKokous(k.id)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kokouslista;