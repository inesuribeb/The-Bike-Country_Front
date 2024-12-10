import "./ExperienceCard.css"

function ExperienceCard({ title, days, imageUrl }) {
    return (
        <div className="experience-card">
            <div className="experience-card__image-container">
                <img src={imageUrl} alt={title} className="experience-card__image" />
            </div>
            <div className="experience-card__info">
                <h5 className="experience-card__title">{title}</h5>
                <p className="experience-card__days">{days}</p>
            </div>
            <button className="experience-card__button">Require now</button>
        </div>
    );
}

export default ExperienceCard;

