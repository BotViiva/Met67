import { Component } from "react";
import './Main.css';

let jäsenet = [{
    nimi: "Tomi Junkkila",
    titteli: "Puheenjohtaja",
    puhelinnumero: "045 6746720",
    sähköposti: "tjunkkila@gmail.com"
},
{
    nimi: "Veli-Matti Kuoppala",
    titteli: "Varapuheenjohtaja",
    puhelinnumero: "0400 664317",
    sähköposti: "veli-matti.kuoppala@anvianet.fi"
},
{
    nimi: "Jaakko Niininen",
    titteli: "Sihteeri",
    puhelinnumero: "044 9763056",
    sähköposti: "jaakko.niininen@gmail.com"
},
{
    nimi: "Tuomo Hautala",
    titteli: "Taloudenhoitaja",
    puhelinnumero: "040 5220471",
    sähköposti: "tomme.hautala@gmail.com"
},
{
    nimi: "Veikko Kiema",
    titteli: "Huvilan isäntä",
    puhelinnumero: "0400 274862",
    sähköposti: "veikko.kiema@gmail.com"
},
{
    nimi: "Juha Witick",
    titteli: "Jäsen",
    puhelinnumero: "050 5864238",
    sähköposti: "juhawitick@hotmail.com"
},
{
    nimi: "Jeppe Koutonen",
    titteli: "Jäsen",
    puhelinnumero: "040 1892356",
    sähköposti: "ugkoutonen@gmail.com"
},
{
    nimi: "Martti Pukkinen",
    titteli: "Varajäsen",
    puhelinnumero: "040 5652164",
    sähköposti: "pukkinen.martti@gmail.com"
},
{
    nimi: "Greger Huldén",
    titteli: "Varajäsen",
    puhelinnumero: "050 3393684",
    sähköposti: "greger.hulden@anvianet.fi"
},
{
    nimi: "Jarno Hakkio",
    titteli: "Varajäsen",
    puhelinnumero: "050 3368995",
    sähköposti: "jarno.hakkio@hotmail.com"
},
{
    nimi: "Ville Saukko",
    titteli: "Varajäsen",
    puhelinnumero: "050 3421214",
    sähköposti: "saukonville@gmail.com"
},
{
    nimi: "Tero Tuoretmaa",
    titteli: "Varajäsen",
    puhelinnumero: "040 0788183",
    sähköposti: "pata88@gmail.com"
},
];

class HallitusLista extends Component {
    render() {
        const sorttaus = jäsenet.map((jäsen) =>
            <div className="HenkilötBox" key={jäsen.id}>
                <h2>{jäsen.titteli}</h2>
                <p >{jäsen.nimi}</p>
                <p >{jäsen.puhelinnumero}</p>
                <p >{jäsen.sähköposti}</p>
            </div>
        );
        return sorttaus;
    }
};

export default HallitusLista