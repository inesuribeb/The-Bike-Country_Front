import ImageCarousel from './ImageCarousel';
import DayDetails from './DayDetails';

function SingleExperience({ experienceTitle, experienceImages }) {
    
    return (
        <div>
            <div>
                <ImageCarousel images = {experienceImages} />
                
            <div>
                <h1>{experienceTitle}</h1>
                <button>Book now</button>
                    
                <DayDetails />
            </div>
            </div>
        </div>
    );
}

export default SingleExperience;