import React, { Component } from "react";
import Tapahtumat from "./Tapahtumat.json"
import TapahtumanLisäys from "./Tapahtumanlisäys"

class Tapahtumalista extends Component {
    render() {
        console.log(Tapahtumat)
        return <table className="Tapahtumapöytä">
            <tbody>
                <tr>
                    <th>KOKOUKSET</th>
                </tr>
                {Tapahtumat.kokoukset.map(kokous => TapahtumanLisäys(kokous))}
                <tr>
                    <th>TAPAHTUMAT</th>
                </tr>
                {Tapahtumat.virkistys.map(kokous => TapahtumanLisäys(kokous))}
            </tbody>
        </table>
    }
}

export default Tapahtumalista