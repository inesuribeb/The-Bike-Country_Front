import Button from "../button/Button";
function MoreExperiences() {
    return (
        <div className="more-experience-section">
            <div className="experiences-container">
                <div className="experience">
                    <img
                        src="https://www.papagayobike.com/images/blog/estrategias-de-recuperacion-para-ciclistas-descanso-estiramiento-y-mas-1.jpg"
                        alt=""
                    />
                    <p>
                        We provide top of the range bikes as standard now if
                        needed. Quality and comfort are our basis.
                    </p>
                </div>
                <div className="experience">
                    <img
                        src="https://www.liligo.es/magazine-viajes/wp-content/uploads/sites/43/2019/02/iStock-1144534910.jpg"
                        alt=""
                    />
                    <p>
                        The Basque Country is known for having one of the best
                        gastronomic culture in the world. We have a
                        responsibility to be a beneficial influence in the
                        environment, and are committed to respecting local
                        tradition and enjoying it in the best res- taurants.
                    </p>
                </div>
                <div className="experience">
                    <img
                        src="https://hoteltheartist.com/wp-content/uploads/2024/06/H4A9894-min.jpg"
                        alt=""
                    />
                    <p>
                        We ensure your money goes into local hands. Rest is
                        essential, which is why you will stay in the best hotels
                        in the area, with great views and accomodations.
                    </p>
                </div>
            </div>
            <div className="button-container">
                <Button
                    onClick={() => {}}
                    text={"Know more about our experiences"}
                ></Button>
            </div>
        </div>
    );
}

export default MoreExperiences;
