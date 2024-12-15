import ExperienceCard from './ExperienceCard';
import "./ExperiencesPacks.css"
import './InfoHeader.css';
import { useState, useEffect } from 'react';
import { obtenerPacks } from '../../utils/js/apiCallController';
import { createReservation } from '../../utils/js/apiCallController';


//         imageUrl: "https://i.ibb.co/6m8J14q/mapa1.webp",
//         imageUrl: "https://i.ibb.co/ZHDvQtF/mapa2.webp",
//         imageUrl: "https://i.ibb.co/wB7mcxM/mapa3.webp",


function ExperiencesPacks() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleReserve = async (reservationData) => {
        try {
            const response = await createReservation(reservationData);
            alert("Reservation created successfully!");
            return response; 

        } catch (error) {
            if (error.message.includes('401')) {
                throw error; 
            } else {
                alert("Error creating reservation: " + error.message);
            }
        }
    };

    const scrollToDetails = () => {
        const detailsSection = document.getElementById('details-section');
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        async function loadPacks() {
            try {
                const data = await obtenerPacks();
                setExperiences(data);
                setLoading(false);
            } catch (err) {
                setError('Error loading experiences');
                setLoading(false);
            }
        }

        loadPacks();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="info-header">
                <div className="info-header__item">
                    <h5 className="info-header__label">When to go</h5>
                    <h4 className="info-header__value">At any season</h4>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Price from</h5>
                    <h4 className="info-header__value">From 7.000€</h4>
                    <h5 
                        className="info-header__included"
                        onClick={scrollToDetails}
                        style={{ cursor: 'pointer' }}
                    >
                        What's included?
                    </h5>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Duration</h5>
                    <h4 className="info-header__value">5 - 7 nights</h4>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Private Journeys</h5>
                    <h4 className="info-header__value">Enquire now</h4>
                </div>
            </div>
            <div className="experiences-container">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.pack_id}
                        imageUrl={experience.image_url}
                        title={experience.name}
                        days={experience.duration}
                        experience={experience}
                        onReserve={handleReserve}
                    />
                ))}
            </div>
        </>
    );
}

export default ExperiencesPacks;