// import ImageCarousel from './ImageCarousel';
import React from 'react';
import DayDetails from './DayDetails';
import NavBar from '../../components/navbar/NavBar'
import './SingleExperience.css'


function SingleExperience() {

    return (
        <div className="experience-page">
            <header>
                <NavBar></NavBar>
            </header>
            <main className="experience-main">
                <div className="carousel-section-2">
                    {/* Aquí iría tu componente Carousel */}
                </div>
                <div className="details-section">
                    <DayDetails />
                </div>
            </main>
        </div>
    );
}

export default SingleExperience;