import jäsenet from '../Hallitus.json';



function HallitusLista () {
        const sorttaus = jäsenet.map((jäsen, index) =>
            <div className="HenkilötBox" key={index}>
                <h2 >{jäsen.titteli}</h2>
                <p >{jäsen.nimi}</p>
                <p >{jäsen.puhelinnumero}</p>
                <p >{jäsen.sähköposti}</p>
            </div>
        );
        return sorttaus;
    
}

export default HallitusLista