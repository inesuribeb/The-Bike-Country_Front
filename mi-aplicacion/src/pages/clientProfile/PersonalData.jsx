import React, { useState, useEffect,useContext } from 'react';
import { getMyProfile } from '../../utils/js/apiCallController'
import { PageContext } from "../../utils/js/context/PageContext.js";
import './PersonalData.css';


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
        <div className='content-data'>
            <div className='hello'>
                <div className='color' ></div>
                <h3>{client.name} {client.surname}</h3>
            </div>
            <div className='data-info'>
                <p>{client.name}</p>
                <p>{client.surname}</p>
                <p>{client.email}</p>
                <p>{client.country.prefix} {client.phone}</p>
                <p>{client.dni}</p>
                <p>{client.address}</p>
                <p>{client.country.name}</p>
            </div>
        </div>
    );
}

export default PersonalData;