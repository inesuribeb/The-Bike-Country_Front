
function PersonalData (){

    const client = 
        {
        name: "Ines",
        surname: "Uribe",
        email: "Uribe",
        phone: "628538684",
        dni: "16089533K",
        address: "Andres Cortina 18, 5D",
        country: {
                name: "Guinea-Bissau",
                iso_code: "GW",
                prefix: "+245"
            }
        }
        
    return (
        <>
            <div>
                <h3>Hello {client.name}</h3>
                <p>{client.name}</p>
                <p>{client.surname}</p>
                <p>{client.email}</p>
                <p>{client.phone}</p>
                <p>{client.dni}</p>
                <p>{client.address}</p>
                <p>{client.country.name}</p>
            </div>
        </>
    );
}

export default PersonalData;