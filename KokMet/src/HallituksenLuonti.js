import { Component } from "react";
import './Main.css';
import jäsenet from './Hallitus.json';



class HallitusLista extends Component {
    render() {
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
};

export default HallitusLista