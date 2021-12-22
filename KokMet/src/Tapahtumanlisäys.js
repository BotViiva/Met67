import React from "react"

const TapahtumanLisäys = (kokous, index) => {
    return <>
        <tr>
            <th key={index}>{kokous.topic}</th>
        </tr>
        <tr>
            <td key={index}>{kokous.date}</td>
        </tr>
        <tr>
            <td key={index}>{kokous.location}</td>
        </tr>
    </>
}

export default TapahtumanLisäys