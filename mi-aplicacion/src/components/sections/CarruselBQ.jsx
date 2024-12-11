import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";

function CarruselBQ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    useEffect(() => {});
    //TODO: Diseño del carrusel por Ines
    return (
        <div className="carousel-section">
            <div className="carousel-container">
                <Button
                    id="left-arrow"
                    onClick={() => {
                        prevSlide();
                    }}
                    text={"<"}
                ></Button>
                <img src={images[currentIndex]} alt="" />
                <Button
                    id="right-arrow"
                    onClick={() => {
                        nextSlide();
                    }}
                    text={">"}
                ></Button>
            </div>
            <div className="discover">
                <Button
                    id="discover-button"
                    onClick={() => {}}
                    text={"Discover the beauty and magic of the Basque Country"}
                ></Button>
            </div>
        </div>
    );
}
export default CarruselBQ;
