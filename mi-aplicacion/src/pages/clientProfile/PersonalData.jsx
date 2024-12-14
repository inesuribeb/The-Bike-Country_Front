import React, { useState, useEffect,useContext } from 'react';
import { getMyProfile } from '../../utils/js/apiCallController'
import { PageContext } from "../../utils/js/context/PageContext.js";



// function PersonalData (){

//     const client = 
//         {
//         name: "Ines",
//         surname: "Uribe",
//         email: "inesuribeb@gmail.com",
//         phone: "628538684",
//         dni: "16089533K",
//         address: "Andres Cortina 18, 5D",
//         country: {
//                 name: "Guinea-Bissau",
//                 iso_code: "GW",
//                 prefix: "+245"
//             }
//         }
        
//     return (
//         <>
//             <div>
//                 <h3>Hello {client.name}</h3>
//                 <p>{client.name}</p>
//                 <p>{client.surname}</p>
//                 <p>{client.email}</p>
//                 <p>{client.phone}</p>
//                 <p>{client.dni}</p>
//                 <p>{client.address}</p>
//                 <p>{client.country.name}</p>
//             </div>
//         </>
//     );
// }

// export default PersonalData;

function PersonalData() {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setPage } = useContext(PageContext);
  
    const handlePage = (pageName) => {
      setPage(pageName)
    };
    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await getMyProfile();
                setClient(data);
                setLoading(false);
            } catch (err) {
                setError('Error loading profile data');
                setLoading(false);
                handlePage("auth")
            }
        }

        loadProfile();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!client) return <div>No client data available</div>;

    return (
        <div>
            <h3>Hello {client.name}</h3>
            <p>{client.name}</p>
            <p>{client.surname}</p>
            <p>{client.email}</p>
            <p>{client.country.prefix} {client.phone}</p>
            <p>{client.dni}</p>
            <p>{client.address}</p>
            <p>{client.country.name}</p>
        </div>
    );
}

export default PersonalData;