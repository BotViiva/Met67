import React from "react"


const TapahtumanLisäys = (kokous) => {
    return <React.Fragment>
        <tr>
            <th>{kokous.topic}</th>
        </tr>
        <tr>
            <td>{kokous.date}</td>
        </tr>
        <tr>
            <td>{kokous.location}</td>
        </tr>
    </React.Fragment>
}

export default TapahtumanLisäys