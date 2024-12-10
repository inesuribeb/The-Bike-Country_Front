import ExperienceCard from './ExperienceCard';
import "./ExperiencesPacks.css"
import './InfoHeader.css';



const experiences=[
    {
        pack_id: 1,
        imageUrl: "https://i.ibb.co/6m8J14q/mapa1.webp",
        title: "From France to Navarra",
        duration: "6 days"
    },
    {
        pack_id: 2,
        imageUrl: "https://i.ibb.co/ZHDvQtF/mapa2.webp",
        title: "From San Sebastian to St Jean Pied de Port",
        duration: "7 days"
    },
    {
        pack_id: 3,
        imageUrl: "https://i.ibb.co/wB7mcxM/mapa3.webp",
        title: "Guipuzcoa tour",
        duration: "8 days"
    },
]

function ExperiencesPacks() {
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
                <h5 className="info-header__included">What's included?</h5>
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
                        imageUrl={experience.imageUrl}
                        title={experience.title}
                        days={experience.duration}
                    />
                ))}
            </div>
        </>
    );
}

export default ExperiencesPacks;
