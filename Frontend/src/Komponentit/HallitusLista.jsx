import { useEffect, useState } from "react";

const HallitusLista = () => {
    const [jäsenet, setJäsenet] = useState([]);

    useEffect(() => {
        const haeJäsenet = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/hallitus", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error("Verkkovirhe: " + response.status);
                }
                const data = await response.json();
                setJäsenet(data);
            } catch (error) {
                console.error("Virhe haettaessa hallituksen jäseniä:", error);
                setJäsenet([]);
            }
        };
        haeJäsenet();
    }, []);

    return (
        <>
            {jäsenet.map((jäsen, index) =>
                <div className="div-metal-plate" key={index} style={{ marginBottom: "2em", margin: "10px auto  ", maxWidth: "900px" }}>
                    <div className="pin pin-tl"></div>
          <div className="pin pin-tr"></div>
          <div className="pin pin-bl"></div>
          <div className="pin pin-br"></div>
                    <h2>{jäsen.titteli}</h2>
                    <p>{jäsen.nimi}</p>
                    <p>{jäsen.puhelinnumero}</p>
                    <p>{jäsen.sähköposti}</p>
                </div>
            )}
        </>
    );
};

export default HallitusLista;