import HallitusLista from './HallitusLista.jsx';
import Tapahtumat from './Tapahtumat.jsx';

function Yhteystiedot ()  {
    return (
      <div className="Hallitus">
          <h2>Hallitus ja toimihenkilöt vuodelle 2025</h2>
          <div>
            <HallitusLista />
          </div>
        </div>
    );
  }


export default Yhteystiedot;
