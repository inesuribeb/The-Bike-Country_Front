// import ImageCarousel from './ImageCarousel';
import React from 'react';
import DayDetails from './DayDetails';

function SingleExperience() {
    
    return (
        <div className="experience-page">
          <div className="carousel-section">
            {/* Aquí iría tu componente Carousel */}
          </div>
          <div className="details-section">
            <DayDetails />
          </div>
        </div>
      );
}

export default SingleExperience;