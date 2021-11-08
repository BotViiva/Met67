import React, { Component } from "react";
import Testidata from "./Tapahtumat.json"

/*
const Tapahtumanlisäys = () => {
    React.createElement("td")
}
*/
const KokouksenLisäys = (kokous) => {
    console.log("test", kokous)
    return <React.Fragment>
        <tr>
            <th>{kokous.topic}</th>
        </tr>
        <tr>
            <td>{kokous.date}</td>
            <td>{kokous.location}</td>
        </tr>
    </React.Fragment>
}


class Tapahtumalista extends Component {
    render() {
        console.log(Testidata)
        return <table>
            <tbody>
                <tr>
                    <th>KOKOUKSET</th>
                </tr>

                {Testidata.kokoukset.map(kokous => KokouksenLisäys(kokous))
                }
                <tr>
                    <th>Virkistystoiminta</th>
                </tr>
                <tr>
                    <td>10.1.2022 Kylpyläreissu Vaasassa</td>
                </tr>
            </tbody>
        </table>
    }
}

export default Tapahtumalista