import React, { Component } from "react";
import Tapahtumat from "./Tapahtumat.json"
import TapahtumanLisäys from "./Tapahtumanlisäys"

class Tapahtumalista extends Component {
    render() {
        return <table className="Tapahtumapöytä">
            <tbody>
                <tr>
                    <th>KOKOUKSET</th>
                </tr>
                {Tapahtumat.kokoukset.map((kokous, index) => TapahtumanLisäys(kokous, index))}
                <tr>
                    <th>TAPAHTUMAT</th>
                </tr>
                {Tapahtumat.virkistys.map((kokous, index) => TapahtumanLisäys(kokous, index))}
            </tbody>
        </table>
    }
}

export default Tapahtumalista