import { useState } from "react";
import ReservationModal from "./ReservationModal";
import "./ExperienceCard.css"

function ExperienceCard({ title, days, imageUrl, experience, onReserve }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const userId = localStorage.getItem("authUserId"); 

    const handleOpenModal = () => {
        if (!userId) {
            alert("Por favor, inicia sesión para hacer una reserva");
            return;
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    return (
        <div className="experience-card">
            <div className="experience-card__image-container">
                <img src={imageUrl} alt={title} className="experience-card__image" />
            </div>
            <div className="experience-card__info">
                <h5 className="experience-card__title">{title}</h5>
                <p className="experience-card__days">{days} days</p>
            </div>
            <button className="experience-card__button" onClick={handleOpenModal}>
                Require now
            </button>
            <ReservationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                experience={experience}
                onSubmit={onReserve}
                userId={userId}
            />
        </div>
    );
}

export default ExperienceCard;
