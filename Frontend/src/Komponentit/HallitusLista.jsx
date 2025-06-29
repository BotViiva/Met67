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
                <div className="HenkilötBox" key={index}>
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