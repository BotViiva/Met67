import HallitusLista from './HallitusLista.jsx';
import Tapahtumat from './Tapahtumat.jsx';

function Hallitus ()  {
    return (
      <div className="Hallitus">
          <Tapahtumat />
          <h2>Hallitus ja toimihenkilöt vuodelle 2025</h2>
          <div className="Henkilöt">
            <HallitusLista />
          </div>
        </div>
    );
  }


export default Hallitus;
